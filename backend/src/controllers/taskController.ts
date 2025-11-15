import Task from "../models/Task";
import Notification from "../models/Notification";
import { sendNotification } from "../server";

export const addTask = async (req:any, res:any) => {
  try {
    const { teamId, title, description, assignedTo } = req.body;
    if (!title) return res.status(400).json({ message: "Title required" });

    const task = await Task.create({
      teamId,
      title,
      description,
      assignedTo,
      status: "Pending",
    });

    // Save DB notification
    await Notification.create({
      teamId,
      title: "New Task Assigned",
      subtitle: `"${title}" added to the team`,
      type: "task",
    });

    //  LIVE NOTIFICATION
    sendNotification(teamId.toString(), {
      title: "New Task Assigned",
      subtitle: `"${title}" was added`,
      type: "task",
      unread: true,
      time: new Date().toISOString(),
    });

    res.json({ task });
  } catch (err:any) { res.status(500).json({ message: err.message }); }
};

export const updateTask = async (req:any, res:any) => {
  try {
    const { taskId } = req.params;
    const updates = req.body;

    const task = await Task.findByIdAndUpdate(
      taskId,
      { ...updates, updatedAt: new Date() },
      { new: true }
    );

    if (!task) return res.status(404).json({ message: "Task not found" });
    // create notification when completed
    if (updates.status === "Completed") {
      await Notification.create({
        teamId: task.teamId,
        title: "Task Completed",
        subtitle: `"${task.title}" marked completed`,
        type: "task",
      });

      // LIVE COMPLETION NOTIFICATION
      sendNotification(task.teamId.toString(), {
        title: "Task Completed",
        subtitle: `"${task.title}" has been completed`,
        type: "task",
        unread: true,
        time: new Date().toISOString(),
      });
    }

    // STATUS UPDATE Notification 
    else if (updates.status) {
      sendNotification(task.teamId.toString(), {
        title: "Task Status Updated",
        subtitle: `"${task.title}" → ${updates.status}`,
        type: "task",
        unread: true,
        time: new Date().toISOString(),
      });
    }
    res.json({ task });
  } catch (err:any) { res.status(500).json({ message: err.message }); }
};

export const listTasks = async (req:any, res:any) => {
  try {
    const { teamId } = req.params;
    const tasks = await Task.find({ teamId }).sort({ createdAt: -1 });
    res.json({ tasks });
  } catch (err:any) { res.status(500).json({ message: err.message }); }
};
