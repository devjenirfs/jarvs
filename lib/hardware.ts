// Aqui você pode integrar com MQTT, HTTP, Serial, etc.
// Por enquanto, vamos simular a execução do comando.

export async function sendCommandToHardware(command: string) {
  switch (command) {
    case 'ligar_ar_condicionado':
      return { status: 'Ar condicionado ligado' };
    case 'desligar_ar_condicionado':
      return { status: 'Ar condicionado desligado' };
    case 'abrir_janelas':
      return { status: 'Janelas abertas' };
    case 'fechar_janelas':
      return { status: 'Janelas fechadas' };
    case 'ativar_limpador':
      return { status: 'Limpador ativado' };
    case 'desativar_limpador':
      return { status: 'Limpador desativado' };
    case 'ativar_comando_voz':
      return { status: 'Comando por voz ativado' };
    default:
      throw new Error('Comando não reconhecido');
  }
}
