function toggleAssistant() {
    let assistant = document.getElementById("assistant");
    assistant.style.display = assistant.style.display === "flex" ? "none" : "flex";
}

function sendFAQ(question) {
    let chatBox = document.getElementById("chatBox");

    // Agregar pregunta del usuario
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerText = question;
    chatBox.appendChild(userMessage);

    // Generar respuesta
    let botResponse = "No entiendo la pregunta.";
    if (question.includes("dius")) botResponse = "Em dic Tic i sóc un llop ártic, els meus creadors em cuiden molt bé.";
    if (question.includes("pots fer")) botResponse = "Puc respondre preguntes frequents i ajudar-te.";
    if (question.includes("hora")) botResponse = `L'hora actual es ${new Date().toLocaleTimeString()}.`;
    if (question.includes("procés")) {
        botResponse = "Si la seva compra compleix el plaç de 72h per tornar producte, pots posar-te en contacte amb l'equip tècnic; será una operació simple.";
    }
    if (question.includes("pagament")) {
        botResponse = "Acceptem varis mètodes de pagament com ara; tarjeta mastercard (crèdit,dèbit), tranferència bancària i bizum al +34 00000001.";
    }
    if (question.includes("idioma")) {
        botResponse = "Actualment, tots els nostres llibres compten amb l'opció de lectura en xinès, japonès, rus, català, anglès, espanyol(ES), françès, alemany.";
    }
    if (question.includes("mes")) {
        botResponse = "Els best sellers del més són: rellenar con los libros que queramos.";
    }

    // Mostrar respuesta del bot
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot");
        botMessage.innerText = botResponse;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

