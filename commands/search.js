const { SlashCommandBuilder, SlashCommandStringOption } = require('discord.js');

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
    }
};