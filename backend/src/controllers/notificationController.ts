import Notification from "../models/Notification";
import { sendNotification } from "../server";

export const listNotifications = async (req: any, res: any) => {
  try {
    const { teamId } = req.params;
    const notifications = await Notification.find({ teamId })
      .sort({ createdAt: -1 })
      .limit(200);
    res.json({ notifications });

  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE NOTIFICATION
export const createNotification = async (req: any, res: any) => {
  try {
    const { teamId, title, subtitle, type } = req.body;

    const noti = await Notification.create({
      teamId,
      title,
      subtitle,
      type,
    });

    // Real-time push
    sendNotification(teamId, {
      id: noti._id,
      title,
      subtitle,
      type,
      time: new Date().toISOString(),
    });

    res.json({ noti });

  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
