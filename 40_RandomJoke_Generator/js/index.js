
const jokes = [
    "Bhai: 'Mujhe tumhari madad chahiye!' \nMain: 'Kaisi madad?' \nBhai: 'Mujhe dekh kar tumhare aise jokes lene hai!'",

    "Teacher: 'Beta, agar tumhare paas 5 aam hain aur main tumse 3 aam le loon, toh tumhare paas kitne aam bachenge?' \nStudent: 'Sir, 5 aam ke 5 aam hain, toh koi aapka kya jaata hai!'",

    "Wife: 'Aaj tumne kya khaya?' \nHusband: 'Bas, kuch kha nahi paya.' \nWife: 'Toh, dinner ka kya kiya?' \nHusband: 'Bhai, main to tumhare cooking se thoda dar gaya!'",

    "Friend 1: 'Yaar, mujhe neend nahi aa rahi!' \nFriend 2: 'Koi baat nahi, thoda Instagram scroll kar!'",

    "Teacher: 'Ek din ek aadmi ne 1 lakh ka cheque diya.' \nStudent: 'Phir?' \nTeacher: 'Phir, woh aadmi teacher ban gaya!'",

    "Maa: 'Beta, tum ghar ke kaam mein madad kyun nahi karte?' \nBeta: 'Maa, mein toh homework kar raha hoon!'",

    "Ladki: 'Mujhe achha lagta hai jab tum mujhe appreciate karte ho!' \nLadka: 'Agar main tumhe bore karoon toh?' \nLadki: 'Main tumhe ignore kar deti hoon!'",

    "Boss: 'Kahan the tum, kaam nahi kar rahe?' \nEmployee: 'Sir, main kaam kar raha hoon... *Kaam karne ki planning kar raha hoon!*'",

    "Bhai: 'Mujhe tum se ek baat karni hai.' \nMain: 'Kya baat?' \nBhai: 'Mujhe lagta hai ki tum galat ho!' \nMain: 'Pehle se hi pata tha!'",

    "Teacher: 'Agar tumhare paas 1000 rupee hain aur 500 rupee ka saman khareedte ho, toh tumhare paas kitna bacha?' \nStudent: 'Sir, woh to aapko mere ATM se pata chalega!'",

    "Pehli Baar Dost: 'Mujhe shaadi ke baad ka life bata!' \nDoosra Dost: 'Pehle wo khana banana sikhna, phir zindagi ke maze lena!'",

    "Maa: 'Jab tumhe nahi pata tha, toh padhayi kyun nahi karte the?' \nBeta: 'Maa, pata nahi tha ki success ka shortcut hona chahiye!'",

    "Boy: 'Mujhe toh lagta hai aap mujhe ignore karte ho!' \nGirl: 'Nahi yaar, main toh tumhare messages reply karne ki planning kar rahi thi!'",

    "Teacher: 'Agar tumhare paas 3 toffees hain, aur main tumse ek le loon, toh tumhare paas kitni toffees bachi?' \nStudent: 'Sir, mere paas to abhi bhi 3 hi hain, par aapko jo karna hai, karo!'",

    "Bhai: 'Agar tumhare paas koi kaam ho toh mujhe batana!' \nMain: 'Haan, main apne dimaag ko kaam de raha hoon!'",

    "Girlfriend: 'Mujhe tumhara sense of humor bahut achha lagta hai!' \nBoyfriend: 'Pehli baar yeh sun raha hoon, kya tum mere jokes samajh pa rahi ho?'",

    "Wife: 'Kya tum mujhe dhund rahe ho?' \nHusband: 'Haan, apna phone dhund raha hoon, yeh tumhara bhi hai na!'",

    "Teacher: 'Tumne homework kyun nahi kiya?' \nStudent: 'Sir, main toh seekh raha tha apne galtiyon se!'",

    "Boy 1: 'Yaar, agar main tumhe bataoon ki main tumse pyar karta hoon!' \nBoy 2: 'Tu mujhse pyar karta hai? Kahan se aaya hai yeh love triangle?'",

    "Maa: 'Beta, tumhara phone kahan hai?' \nBeta: 'Maa, voh toh pocket mein tha!'"
];

function generateJoke() {
    const joke = document.getElementById('joke');
    let randomJoke = Math.floor(Math.random() * 20);
    console.log(jokes[randomJoke]);
    joke.innerText = jokes[randomJoke];
}