
declare class GULAppEnvironmentUtil extends NSObject {

	static alloc(): GULAppEnvironmentUtil; // inherited from NSObject

	static appleDevicePlatform(): string;

	static applePlatform(): string;

	static deploymentType(): string;

	static deviceModel(): string;

	static deviceSimulatorModel(): string;

	static isAppClip(): boolean;

	static isAppExtension(): boolean;

	static isAppStoreReceiptSandbox(): boolean;

	static isFromAppStore(): boolean;

	static isSimulator(): boolean;

	static new(): GULAppEnvironmentUtil; // inherited from NSObject

	static supportsBackgroundURLSessionUploads(): boolean;

	static systemVersion(): string;
}

declare function GULGetLoggerLevel(): GULLoggerLevel;

declare function GULIsLoggableLevel(loggerLevel: GULLoggerLevel): boolean;

declare class GULKeychainStorage extends NSObject {

	static alloc(): GULKeychainStorage; // inherited from NSObject

	static new(): GULKeychainStorage; // inherited from NSObject

	constructor(o: { service: string; });

	getObjectForKeyObjectClassAccessGroupCompletionHandler(key: string, objectClass: typeof NSObject, accessGroup: string, completionHandler: (p1: NSSecureCoding, p2: NSError) => void): void;

	initWithService(service: string): this;

	removeObjectForKeyAccessGroupCompletionHandler(key: string, accessGroup: string, completionHandler: (p1: NSError) => void): void;

	setObjectForKeyAccessGroupCompletionHandler(object: NSSecureCoding, key: string, accessGroup: string, completionHandler: (p1: NSSecureCoding, p2: NSError) => void): void;
}

declare class GULKeychainUtils extends NSObject {

	static alloc(): GULKeychainUtils; // inherited from NSObject

	static getItemWithQueryError(query: NSDictionary<any, any>): NSData;

	static new(): GULKeychainUtils; // inherited from NSObject

	static removeItemWithQueryError(query: NSDictionary<any, any>): boolean;

	static setItemWithQueryError(item: NSData, query: NSDictionary<any, any>): boolean;
}

declare function GULLoggerForceDebug(): void;

declare function GULLoggerInitialize(): void;

declare const enum GULLoggerLevel {

	Error = 3,

	Warning = 4,

	Notice = 5,

	Info = 6,

	Debug = 7,

	Min = 3,

	Max = 7
}

declare function GULLoggerRegisterVersion(version: string): void;

declare class GULLoggerWrapper extends NSObject {

	static alloc(): GULLoggerWrapper; // inherited from NSObject

	static new(): GULLoggerWrapper; // inherited from NSObject
}

declare class GULNetworkInfo extends NSObject {

	static alloc(): GULNetworkInfo; // inherited from NSObject

	static getNetworkRadioType(): string;

	static getNetworkType(): GULNetworkType;

	static new(): GULNetworkInfo; // inherited from NSObject
}

declare const enum GULNetworkType {

	None = -1,

	Mobile = 0,

	WIFI = 1
}

declare function GULSetLoggerLevel(loggerLevel: GULLoggerLevel): void;

declare class GULUserDefaults extends NSObject {

	static alloc(): GULUserDefaults; // inherited from NSObject

	static new(): GULUserDefaults; // inherited from NSObject

	static standardUserDefaults(): GULUserDefaults;

	constructor(o: { suiteName: string; });

	arrayForKey(defaultName: string): NSArray<any>;

	boolForKey(defaultName: string): boolean;

	dictionaryForKey(defaultName: string): NSDictionary<string, any>;

	doubleForKey(defaultName: string): number;

	floatForKey(defaultName: string): number;

	initWithSuiteName(suiteName: string): this;

	integerForKey(defaultName: string): number;

	objectForKey(defaultName: string): any;

	removeObjectForKey(defaultName: string): void;

	setBoolForKey(value: boolean, defaultName: string): void;

	setDoubleForKey(value: number, defaultName: string): void;

	setFloatForKey(value: number, defaultName: string): void;

	setIntegerForKey(value: number, defaultName: string): void;

	setObjectForKey(value: any, defaultName: string): void;

	stringForKey(defaultName: string): string;
}

declare var GoogleUtilitiesVersionNumber: number;

declare var GoogleUtilitiesVersionString: interop.Reference<number>;

declare var kGULKeychainUtilsErrorDomain: string;

declare var kGULLogSubsystem: string;
