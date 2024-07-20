const Chat = require("../models/chatModel");

async function showChats(req, res) {
  try {
    const chats = await Chat.find();
    // res.status(200).json({
    //   status: "success",
    //   data: chats,
    // });
    res.render("index.ejs", { chats });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// --------------------------------------------------------------------------------------------------------------

async function newChatBtn(req, res) {
  res.render("newChat.ejs");
}

// --------------------------------------------------------------------------------------------------------------

async function createChat(req, res) {
  try {
    let { message, from, to } = req.body;
    let response = await Chat.create({
      message,
      from,
      to,
    });
    console.log(response);
    res.redirect("/api/v1/chats");
    // res.json({
    //   status: "success",
    //   data: response,
    // });
  } catch (e) {
    console.log(e);
    console.log(req.body);
    res.json({
      status: "fail",
    });
  }
}

// -------------------------------------------------------------------------------------------------------------
async function editChatBtn(req, res) {
  try {
    let { id } = req.params;
    let updatedChat = await Chat.findById(id);
    res.render("editChat.ejs", { updatedChat });
  } catch (e) {
    console.log(e);
    res.json({
      status: "fail",
    });
  }
}

// ------------------------------------------------------------------------------------------------------------
async function editChat(req, res) {
  try {
    let { id } = req.params;
    let { message } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { message: message },
      { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/api/v1/chats");
  } catch (e) {
    console.log(e);
    res.json({
      status: "fail",
    });
  }
}

// ------------------------------------------------------------------------------------------------------------

async function deleteChat(req, res) {
  try {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/api/v1/chats");
  } catch (e) {
    console.log(e);
    res.json({
      status: "fail to delete",
    });
  }
}

module.exports = {
  showChats,
  newChatBtn,
  createChat,
  editChatBtn,
  editChat,
  deleteChat,
};
