import { Webhook } from "svix";
import userModel from "./../models/user.model.js";
// https://clearcut-neon-six.vercel.app/api/user/webhooks

const clerkWebhooks = async (req, res) => {
  try {
    // 1. Verify the webhook using the raw request body
    const wHook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const evt = wHook.verify(req.body, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    // 2. Use the verified event, not req.body
    const { data, type } = evt;

    console.log("Verified Clerk webhook event:", type);

    switch (type) {
      case "user.created": {
        // 3. Create the user ONCE
        await userModel.create({
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        });

        console.log("User created:", data.id);
        break;
      }

      case "user.updated": {
        const updatedUser = await userModel.findOneAndUpdate(
          { clerkId: data.id },
          {
            $set: {
              email: data.email_addresses?.[0]?.email_address,
              firstName: data.first_name,
              lastName: data.last_name,
              photo: data.image_url,
            },
          },
          { new: true, runValidators: true },
        );

        if (!updatedUser) {
          console.warn("User not found for update:", data.id);
        }

        break;
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });

        console.log("User deleted:", data.id);
        break;
      }

      default: {
        console.log("Ignoring unsupported event:", type);
      }
    }

    // 4. Return success for all successfully processed events
    return res.status(200).json({ received: true });
  } catch (error) {
    // 5. Log the actual error and return a failure status
    console.error("Clerk webhook failed:", error);

    return res.status(500).json({
      success: false,
      message: "Webhook processing failed",
    });
  }
};

export { clerkWebhooks };
