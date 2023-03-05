const { SlashCommandBuilder, SlashCommandStringOption } = require('discord.js');
const axios = require("axios");
const fs = require('fs')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('search')
	    .setDescription('Searches for a drug.')

	    .addStringOption(option =>
		    option.setName('input')
			    .setDescription('The drug to search for.')
                .setRequired(true)),

        
        // .addBooleanOption(option => 
        //     option.setName('ephemeral')
        //         .setDescription('Can other people see what drug you looked up?')),

    async execute(interaction){
        const drug = interaction.options.getString('input');
        
        await interaction.reply(drug);

        var a = drug;

    // One Parameter
        // const options = {
        //     method: 'GET',
        //     url: 'https://drug-info-and-price-history.p.rapidapi.com/1/genericname',
        //     params: {drug: a},
        //     headers: {
        //         'X-RapidAPI-Key': 'c4716e573cmsh70f83348dbb9ad9p180e62jsne70931e22da8',
        //         'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
        //     }
        // };

        //     axios.request(options).then(function (response) {
	    //         console.log(response.data.generic_name);
        //     }).catch(function (error) {
	    //         console.error(error);
        //     });

        const options = {
            method: 'GET',
            url: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
            params: {drug: a},
            headers: {
                'X-RapidAPI-Key': 'c4716e573cmsh70f83348dbb9ad9p180e62jsne70931e22da8',
                'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
            }
        };
        var temp = ''

        axios.request(options).then(function (response) {
            temp = response.data
            console.log(temp);
        }).catch(function (error) {
            console.error(error);
        });

        fs.writeFile("temp.txt", temp, (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n");
            }
          });
    }
};