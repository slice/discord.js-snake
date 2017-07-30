module.exports = client => {
  client.command('help', '<command>', ctx => {
    if (ctx.args.command) {
      const command = client.commands.get(ctx.args.command);
      if (!command) return ctx.reply('Unknown command.');

      return ctx.reply(
`__**Command help**__: **${ctx.args.command}**${command.help ? `\n**${command.help}**` : ''}
\`${client._options.prefix}${ctx.args.command} ${command.args.map(x => x.raw).join(' ')}\`
`);
    } else {
      return ctx.reply(
`**__Command list__** (use \`help <command name>\` for more details about a specific command)
${Array.from(client.commands.keys()).join(', ')}`);
    }
  }, 'Command help');
};
