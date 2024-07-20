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

module.exports = { showChats };
