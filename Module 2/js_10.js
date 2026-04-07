const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let candidates = [];
let votersCount = 0;
let currentVoter = 1;

// --- Ask for the number of candidates ---
rl.question("Enter number of candidates: ", (count) => {
    const numCandidates = Number(count);

    function askCandidateName(i) {
        if (i > numCandidates) {
            askVotersCount();
            return;
        }

        rl.question(`Name for candidate ${i}: `, (name) => {
            candidates.push({
                name: name.trim(),
                votes: 0
            });
            askCandidateName(i + 1);
        });
    }

    askCandidateName(1);
});

// --- Ask the number of voters ---
function askVotersCount() {
    rl.question("Enter number of voters: ", (count) => {
        votersCount = Number(count);
        askVote();
    });
}

// --- Ask each voter for their vote ---
function askVote() {
    if (currentVoter > votersCount) {
        finishVoting();
        return;
    }

    rl.question(`Voter ${currentVoter}, enter candidate name (empty = blank vote): `, (vote) => {
        vote = vote.trim();

        if (vote !== "") {
            const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
            if (candidate) {
                candidate.votes++;
            }
        }

        currentVoter++;
        askVote();
    });
}

// --- Announce the winner and display the results ---
function finishVoting() {
    const sorted = [...candidates].sort((a, b) => b.votes - a.votes);

    const maxVotes = sorted[0].votes;

    // we find all candidates with the maximum number of votes
    const winners = sorted.filter(c => c.votes === maxVotes);

    if (winners.length === 1) {
        console.log(`\nThe winner is ${winners[0].name} with ${winners[0].votes} votes.`);
    } else {
        const names = winners.map(w => w.name).join(", ");
        console.log(`\nIt's a tie between: ${names} (${maxVotes} votes each)`);
    }

    console.log("results:");
    sorted.forEach(c => {
        console.log(`${c.name}: ${c.votes} votes`);
    });

    rl.close();
}