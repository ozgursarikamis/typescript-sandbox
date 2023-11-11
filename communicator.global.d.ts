declare function myLib(options: myLib.Options): void;
declare namespace myLib {
    interface Options {
        width?: number;
        height?: number;
        color?: string;
    }
}