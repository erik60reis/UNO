const BaseCommand = require('../BaseCommand');

module.exports = class SupportCommand extends BaseCommand {
  constructor(client) {
    super(client, 'support');
  }

  async execute(msg) {
    let chan = await this.client.getDMChannel(msg.author.id);
    try {
      //await chan.createMessage('Here\'s a link to my support server: https://discord.gg/44QaDCwPS3');
      return 'Here\'s a link to my support server: https://discord.gg/44QaDCwPS3';
    } catch (err) {
      console.log(err);
      return 'Sorry, an error ocurred, and try again.';
    }
  }
};
