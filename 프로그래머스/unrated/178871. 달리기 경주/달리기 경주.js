function solution(players, callings) {
    const rank = new Map();
    const name = new Map();
    for (let i = 0; i < players.length; i++) {
        rank.set(i + 1, players[i]);
        name.set(players[i], i + 1);
    }

    for (var y = 0; y < callings.length; y++) {
        let front = callings[y];
        let back = rank.get(name.get(front) - 1);

        name.set(front, name.get(front) - 1);
        name.set(back, name.get(front) + 1);

        rank.set(name.get(front) + 1, back);
        rank.set(name.get(front), front);
    }
    return [...rank.values()];
}