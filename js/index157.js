let console1 = "PS4";
const games = [];
games[0] = {
    name: 'Crash Bandicoot N. Sane Trilogy',
    price: 1060,
    sold: 20,
    console: 'PS4',
    showDetail: function(){
    console.log(`name: ${this.name}`);
    console.log(`price: ${this.price}`);
    console.log(`sold: ${this.sold}`);
    console.log(`consile: ${this.console}`);
    console.log(`===========================`);
    },
};
games[1] = {
    name: 'Lego Marvel Super Heroes',
    price: 700,
    sold: 25,
    console: 'XBOX',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
games[2] = {
    name: 'Gta V',
    price: 1449,
    sold: 30,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
games[3] = {
    name: 'Mortal Kombat Xl',
    price: 1190,
    sold: 34,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
games[4] = {
    name: 'Gta V',
    price: 1250,
    sold: 60,
    console: 'XBOX',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
games[5]= {
    name: 'Fifa 2017',
    price: 890,
    sold: 15,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
games[6] = {
    name: 'Uncharted 4',
    price: 950,
    sold: 30,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
games[7] = {
    name: 'Mortal Kombat Xl',
    price: 940,
    sold: 30,
    console: 'XBOX',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
games[8] = {
    name: 'Need For Speed',
    price: 790,
    sold: 10,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
games[9] = {
    name: 'Lego Batman',
    price: 1000,
    sold: 18,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
games[10] = {
    name: 'Fifa 17',
    price: 1290,
    sold: 12,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
games[11] = {
    name: 'Resident Evil 7',
    price: 1390,
    sold: 10,
    console: 'PS4',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
games[12] = {
    name: 'Dragon Ball XX',
    price: 1390,
    sold: 25,
    console: 'XBOX',
    showDetail: function(){
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`sold: ${this.sold}`);
        console.log(`consile: ${this.console}`);
        console.log(`===========================`);
        },
};
const ps4Games = games.filter(function(game) {
    return (console1 === game.console);
});
for (let i = 0; i <= ps4Games.length-1; i++) {
    ps4Games[i].showDetail();
};