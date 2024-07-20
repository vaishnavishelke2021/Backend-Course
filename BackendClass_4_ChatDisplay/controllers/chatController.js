const Chat = require("../models/chaatModel");

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

async function newChatBtn(req, res) {
  res.render("newChat.ejs");
}

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

module.exports = { showChats, newChatBtn, createChat };
