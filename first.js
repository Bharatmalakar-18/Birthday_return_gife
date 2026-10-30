
// SPECIAL NAMES AND THEIR MESSAGES

const specialMessages = {

    "rahul": "Rahul ji, aapki dosti ka subscription lifetime free hai — bas snacks aapki taraf se! 🍕",

    "priya": "Priya, aapki smile ke saamne birthday cake bhi thoda feeka hai! 🌸",

    "aman": "Aman bhai, aap officially group ke Chief Entertainment Officer ho. Salary: unlimited samose! 😂"

};


// RANDOM FUNNY GIFTS

const funnyGifts = [

    {
        icon: "🏆",
        title: "Official Legend Award",
        text: "Aapko duniya ka sabse zabardast dost hone ka award diya jaata hai. Trophy imagination mein hai, respect real hai!"
    },

    {
        icon: "🍕",
        title: "Free Pizza ka Vaada",
        text: "Aapko ek imaginary pizza gift kiya jaata hai. Delivery kab hogi? Iska jawab future mein milega! 😜"
    },

    {
        icon: "👑",
        title: "Aaj ke Maharaj",
        text: "Aaj se aap ek din ke liye Birthday Kingdom ke Maharaj hain!"
    },

    {
        icon: "😂",
        title: "Hasi ka Unlimited Pack",
        text: "Aapko lifetime unlimited hasi aur zero tension ka funny pack diya gaya hai!"
    },

    {
        icon: "🧦",
        title: "Golden Socks",
        text: "Ye special invisible golden socks sirf lucky logon ko milte hain!"
    },

    {
        icon: "🎟️",
        title: "VIP Dost Pass",
        text: "Aapko meri taraf se VIP Dost Pass mila hai — entry free, lekin treat aapko deni padegi! 😁"
    }

];


// SELECT HTML ELEMENTS

const nameInput = document.getElementById("guestName");

const result = document.getElementById("result");


// OPEN GIFT FUNCTION

function openGift() {

    const name = nameInput.value.trim();

    if (name === "") {

        alert("Pehle apna naam toh likhiye! 😊");

        nameInput.focus();

        return;
    }

    const key = name.toLowerCase();

    let gift;


    // CHECK SPECIAL NAME

    if (specialMessages[key]) {

        gift = {

            icon: "💌",

            title: "Aapke liye Special Message!",

            text: specialMessages[key]

        };

    }

    else {

        // RANDOM GIFT

        gift = funnyGifts[
            Math.floor(Math.random() * funnyGifts.length)
        ];

    }


    // DISPLAY GIFT

    document.getElementById("giftIcon").textContent = gift.icon;

    document.getElementById("giftTitle").textContent = gift.title;

    document.getElementById("giftText").textContent =
        name + ", " + gift.text;


    result.style.display = "block";

    result.classList.remove("shake");

    void result.offsetWidth;

    result.classList.add("shake");

}


// BUTTON CLICK EVENT

document.getElementById("giftButton")
.addEventListener("click", openGift);


// ENTER KEY EVENT

nameInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        openGift();

    }

});
