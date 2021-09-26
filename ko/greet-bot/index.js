function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(msg.includes("안녕하세요")){
    replier.reply("안녕하세요, "+sender+"님!")
  }
}
