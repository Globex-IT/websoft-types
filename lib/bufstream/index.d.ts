
/**
 * Конструктор объекта BufStream, позволяющего записывать данные в буфер в памяти как в поток.
 */
interface BufStream extends Omit<Stream, "ReadLine" | "WriteBinary" | "WriteStr"> {}

interface BufStreamConstructor {
    new(): BufStream;
}
  
declare var BufStream: BufStreamConstructor;
  