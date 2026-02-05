export class Conta {

  constructor(
    public numero: number,
    public titular: string,
    public saldo: number
  ) {}

  public visualizar(): void {
    console.log("Número:", this.numero);
    console.log("Titular:", this.titular);
    console.log("Saldo:", this.saldo);
  }

  public sacar(valor: number): boolean {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  public depositar(valor: number): void {
    this.saldo += valor;
  }
}
