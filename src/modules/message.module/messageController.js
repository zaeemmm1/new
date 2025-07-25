import { Conversation } from "../../models/conversationModel.js"
import { getReceiverSocketId, io } from "../../socket/socket.js"
import { Message } from "../../models/messageModel.js"


export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { receiverId } = req.params;
        const senderId = req.user.id;

        let conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] } });


        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                messages: []
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        conversation.messages.push(newMessage._id);

        await Promise.all([conversation.save(), newMessage.save()]);


        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            // io.to(receiverSocketId).emit("newMessage", newMessage)
            const populatedMessage = await Message.findById(newMessage._id);
            io.to(receiverSocketId).emit("newMessage", populatedMessage);

        }






        res.status(200).json({ success: true, message: newMessage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



export const getMessages = async (req, res) => {
    try {

        const { userToChatId } = req.params;
        const senderId = req.user.id;


        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");


        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const getUserConversations = async (req, res) => {
    try {

        const userId = req.user.id;
        const allConvo = await Conversation.find({
            participants: { $in: [userId] }
        }
        ).populate('participants')
            .populate({
                path: 'messages',
                options: { sort: { createdAt: 1 } }
            });

        res.status(200).json(allConvo);

    } catch (error) {
        console.log("Error in getUserConversations controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}



