const {
default: makeWASocket,
useMultiFileAuthState
} = require("@whiskeysockets/baileys");

async function startBot() {
const { state, saveCreds } = await useMultiFileAuthState("session");

const sock = makeWASocket({
auth: state
});

sock.ev.on("creds.update", saveCreds);

sock.ev.on("messages.upsert", async ({ messages }) => {
const msg = messages[0];
if (!msg.message) return;

const from = msg.key.remoteJid;
const text =
  msg.message.conversation ||
  msg.message.extendedTextMessage?.text ||
  "";

await sock.sendMessage(from, {
  react: {
    text: "❤️",
    key: msg.key
  }
});

if (text.toLowerCase() === "hi") {
  await sock.sendMessage(from, {
    text: "👋 Assalam-o-Alaikum! Welcome to Khursheed Bot."
  });
}

if (text === "!menu") {
  await sock.sendMessage(from, {
    text: "🤖 KHURSHEED BOT\n\n!menu\n!ping\nowner"
  });
}

if (text === "!ping") {
  await sock.sendMessage(from, {
    text: "🏓 Pong!"
  });
}

  }

if (text.toLowerCase() === "owner") {
  await sock.sendMessage(from, {
    text: "👑 Owner: Khursheed"
  });
}

});

sock.ev.on("connection.update", ({ connection }) => {
  if (connection === "open") {
    console.log("✅ Bot Connected");
  }
});

}

startBot();

if (text.toLowerCase() === "owner") {
  await sock.sendMessage(from, {
    text: "👑 Owner: Khursheed"
  });
}

});

sock.ev.on("connection.update", ({ connection }) => {
if (connection === "open") {
console.log("✅ Bot Connected");
}
});
}

startBot();
