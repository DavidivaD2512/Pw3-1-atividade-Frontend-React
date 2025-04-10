
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Genero
 * 
 */
export type Genero = $Result.DefaultSelection<Prisma.$GeneroPayload>
/**
 * Model Status
 * 
 */
export type Status = $Result.DefaultSelection<Prisma.$StatusPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Jogo
 * 
 */
export type Jogo = $Result.DefaultSelection<Prisma.$JogoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Generos
 * const generos = await prisma.genero.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Generos
   * const generos = await prisma.genero.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.genero`: Exposes CRUD operations for the **Genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.genero.findMany()
    * ```
    */
  get genero(): Prisma.GeneroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jogo`: Exposes CRUD operations for the **Jogo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jogos
    * const jogos = await prisma.jogo.findMany()
    * ```
    */
  get jogo(): Prisma.JogoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Genero: 'Genero',
    Status: 'Status',
    Avaliacao: 'Avaliacao',
    Usuario: 'Usuario',
    Jogo: 'Jogo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "genero" | "status" | "avaliacao" | "usuario" | "jogo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Genero: {
        payload: Prisma.$GeneroPayload<ExtArgs>
        fields: Prisma.GeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findFirst: {
            args: Prisma.GeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findMany: {
            args: Prisma.GeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          create: {
            args: Prisma.GeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          createMany: {
            args: Prisma.GeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          update: {
            args: Prisma.GeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          deleteMany: {
            args: Prisma.GeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          aggregate: {
            args: Prisma.GeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenero>
          }
          groupBy: {
            args: Prisma.GeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneroCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroCountAggregateOutputType> | number
          }
        }
      }
      Status: {
        payload: Prisma.$StatusPayload<ExtArgs>
        fields: Prisma.StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findFirst: {
            args: Prisma.StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findMany: {
            args: Prisma.StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          create: {
            args: Prisma.StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          createMany: {
            args: Prisma.StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          update: {
            args: Prisma.StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          deleteMany: {
            args: Prisma.StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Jogo: {
        payload: Prisma.$JogoPayload<ExtArgs>
        fields: Prisma.JogoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JogoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JogoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          findFirst: {
            args: Prisma.JogoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JogoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          findMany: {
            args: Prisma.JogoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>[]
          }
          create: {
            args: Prisma.JogoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          createMany: {
            args: Prisma.JogoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JogoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          update: {
            args: Prisma.JogoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          deleteMany: {
            args: Prisma.JogoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JogoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JogoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          aggregate: {
            args: Prisma.JogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJogo>
          }
          groupBy: {
            args: Prisma.JogoGroupByArgs<ExtArgs>
            result: $Utils.Optional<JogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.JogoCountArgs<ExtArgs>
            result: $Utils.Optional<JogoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    genero?: GeneroOmit
    status?: StatusOmit
    avaliacao?: AvaliacaoOmit
    usuario?: UsuarioOmit
    jogo?: JogoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    jogo: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | GeneroCountOutputTypeCountJogoArgs
  }

  // Custom InputTypes
  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroCountOutputType
     */
    select?: GeneroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountJogoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
  }


  /**
   * Count Type StatusCountOutputType
   */

  export type StatusCountOutputType = {
    jogo: number
  }

  export type StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | StatusCountOutputTypeCountJogoArgs
  }

  // Custom InputTypes
  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeCountJogoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
  }


  /**
   * Count Type AvaliacaoCountOutputType
   */

  export type AvaliacaoCountOutputType = {
    jogo: number
  }

  export type AvaliacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | AvaliacaoCountOutputTypeCountJogoArgs
  }

  // Custom InputTypes
  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvaliacaoCountOutputType
     */
    select?: AvaliacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeCountJogoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Genero
   */

  export type AggregateGenero = {
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  export type GeneroAvgAggregateOutputType = {
    id_genero: number | null
  }

  export type GeneroSumAggregateOutputType = {
    id_genero: number | null
  }

  export type GeneroMinAggregateOutputType = {
    id_genero: number | null
    genero: string | null
  }

  export type GeneroMaxAggregateOutputType = {
    id_genero: number | null
    genero: string | null
  }

  export type GeneroCountAggregateOutputType = {
    id_genero: number
    genero: number
    _all: number
  }


  export type GeneroAvgAggregateInputType = {
    id_genero?: true
  }

  export type GeneroSumAggregateInputType = {
    id_genero?: true
  }

  export type GeneroMinAggregateInputType = {
    id_genero?: true
    genero?: true
  }

  export type GeneroMaxAggregateInputType = {
    id_genero?: true
    genero?: true
  }

  export type GeneroCountAggregateInputType = {
    id_genero?: true
    genero?: true
    _all?: true
  }

  export type GeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genero to aggregate.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generos
    **/
    _count?: true | GeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroMaxAggregateInputType
  }

  export type GetGeneroAggregateType<T extends GeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenero[P]>
      : GetScalarType<T[P], AggregateGenero[P]>
  }




  export type GeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroWhereInput
    orderBy?: GeneroOrderByWithAggregationInput | GeneroOrderByWithAggregationInput[]
    by: GeneroScalarFieldEnum[] | GeneroScalarFieldEnum
    having?: GeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroCountAggregateInputType | true
    _avg?: GeneroAvgAggregateInputType
    _sum?: GeneroSumAggregateInputType
    _min?: GeneroMinAggregateInputType
    _max?: GeneroMaxAggregateInputType
  }

  export type GeneroGroupByOutputType = {
    id_genero: number
    genero: string
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  type GetGeneroGroupByPayload<T extends GeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroGroupByOutputType[P]>
        }
      >
    >


  export type GeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_genero?: boolean
    genero?: boolean
    jogo?: boolean | Genero$jogoArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genero"]>



  export type GeneroSelectScalar = {
    id_genero?: boolean
    genero?: boolean
  }

  export type GeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_genero" | "genero", ExtArgs["result"]["genero"]>
  export type GeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | Genero$jogoArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genero"
    objects: {
      jogo: Prisma.$JogoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_genero: number
      genero: string
    }, ExtArgs["result"]["genero"]>
    composites: {}
  }

  type GeneroGetPayload<S extends boolean | null | undefined | GeneroDefaultArgs> = $Result.GetResult<Prisma.$GeneroPayload, S>

  type GeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroCountAggregateInputType | true
    }

  export interface GeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genero'], meta: { name: 'Genero' } }
    /**
     * Find zero or one Genero that matches the filter.
     * @param {GeneroFindUniqueArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneroFindUniqueArgs>(args: SelectSubset<T, GeneroFindUniqueArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneroFindUniqueOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneroFindFirstArgs>(args?: SelectSubset<T, GeneroFindFirstArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.genero.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.genero.findMany({ take: 10 })
     * 
     * // Only select the `id_genero`
     * const generoWithId_generoOnly = await prisma.genero.findMany({ select: { id_genero: true } })
     * 
     */
    findMany<T extends GeneroFindManyArgs>(args?: SelectSubset<T, GeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genero.
     * @param {GeneroCreateArgs} args - Arguments to create a Genero.
     * @example
     * // Create one Genero
     * const Genero = await prisma.genero.create({
     *   data: {
     *     // ... data to create a Genero
     *   }
     * })
     * 
     */
    create<T extends GeneroCreateArgs>(args: SelectSubset<T, GeneroCreateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generos.
     * @param {GeneroCreateManyArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneroCreateManyArgs>(args?: SelectSubset<T, GeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genero.
     * @param {GeneroDeleteArgs} args - Arguments to delete one Genero.
     * @example
     * // Delete one Genero
     * const Genero = await prisma.genero.delete({
     *   where: {
     *     // ... filter to delete one Genero
     *   }
     * })
     * 
     */
    delete<T extends GeneroDeleteArgs>(args: SelectSubset<T, GeneroDeleteArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genero.
     * @param {GeneroUpdateArgs} args - Arguments to update one Genero.
     * @example
     * // Update one Genero
     * const genero = await prisma.genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneroUpdateArgs>(args: SelectSubset<T, GeneroUpdateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generos.
     * @param {GeneroDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneroDeleteManyArgs>(args?: SelectSubset<T, GeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneroUpdateManyArgs>(args: SelectSubset<T, GeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genero.
     * @param {GeneroUpsertArgs} args - Arguments to update or create a Genero.
     * @example
     * // Update or create a Genero
     * const genero = await prisma.genero.upsert({
     *   create: {
     *     // ... data to create a Genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genero we want to update
     *   }
     * })
     */
    upsert<T extends GeneroUpsertArgs>(args: SelectSubset<T, GeneroUpsertArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.genero.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends GeneroCountArgs>(
      args?: Subset<T, GeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneroAggregateArgs>(args: Subset<T, GeneroAggregateArgs>): Prisma.PrismaPromise<GetGeneroAggregateType<T>>

    /**
     * Group by Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneroGroupByArgs['orderBy'] }
        : { orderBy?: GeneroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genero model
   */
  readonly fields: GeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jogo<T extends Genero$jogoArgs<ExtArgs> = {}>(args?: Subset<T, Genero$jogoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genero model
   */
  interface GeneroFieldRefs {
    readonly id_genero: FieldRef<"Genero", 'Int'>
    readonly genero: FieldRef<"Genero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genero findUnique
   */
  export type GeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findUniqueOrThrow
   */
  export type GeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findFirst
   */
  export type GeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findFirstOrThrow
   */
  export type GeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findMany
   */
  export type GeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Generos to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero create
   */
  export type GeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a Genero.
     */
    data: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
  }

  /**
   * Genero createMany
   */
  export type GeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generos.
     */
    data: GeneroCreateManyInput | GeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genero update
   */
  export type GeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a Genero.
     */
    data: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
    /**
     * Choose, which Genero to update.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero updateMany
   */
  export type GeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generos.
     */
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyInput>
    /**
     * Filter which Generos to update
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to update.
     */
    limit?: number
  }

  /**
   * Genero upsert
   */
  export type GeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the Genero to update in case it exists.
     */
    where: GeneroWhereUniqueInput
    /**
     * In case the Genero found by the `where` argument doesn't exist, create a new Genero with this data.
     */
    create: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
    /**
     * In case the Genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
  }

  /**
   * Genero delete
   */
  export type GeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter which Genero to delete.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero deleteMany
   */
  export type GeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generos to delete
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to delete.
     */
    limit?: number
  }

  /**
   * Genero.jogo
   */
  export type Genero$jogoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    cursor?: JogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Genero without action
   */
  export type GeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
  }


  /**
   * Model Status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusAvgAggregateOutputType = {
    id_status: number | null
  }

  export type StatusSumAggregateOutputType = {
    id_status: number | null
  }

  export type StatusMinAggregateOutputType = {
    id_status: number | null
    status: string | null
  }

  export type StatusMaxAggregateOutputType = {
    id_status: number | null
    status: string | null
  }

  export type StatusCountAggregateOutputType = {
    id_status: number
    status: number
    _all: number
  }


  export type StatusAvgAggregateInputType = {
    id_status?: true
  }

  export type StatusSumAggregateInputType = {
    id_status?: true
  }

  export type StatusMinAggregateInputType = {
    id_status?: true
    status?: true
  }

  export type StatusMaxAggregateInputType = {
    id_status?: true
    status?: true
  }

  export type StatusCountAggregateInputType = {
    id_status?: true
    status?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithAggregationInput | StatusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id_status: number
    status: string
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_status?: boolean
    status?: boolean
    jogo?: boolean | Status$jogoArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>



  export type StatusSelectScalar = {
    id_status?: boolean
    status?: boolean
  }

  export type StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_status" | "status", ExtArgs["result"]["status"]>
  export type StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | Status$jogoArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Status"
    objects: {
      jogo: Prisma.$JogoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_status: number
      status: string
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type StatusGetPayload<S extends boolean | null | undefined | StatusDefaultArgs> = $Result.GetResult<Prisma.$StatusPayload, S>

  type StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Status'], meta: { name: 'Status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusFindUniqueArgs>(args: SelectSubset<T, StatusFindUniqueArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusFindFirstArgs>(args?: SelectSubset<T, StatusFindFirstArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id_status`
     * const statusWithId_statusOnly = await prisma.status.findMany({ select: { id_status: true } })
     * 
     */
    findMany<T extends StatusFindManyArgs>(args?: SelectSubset<T, StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends StatusCreateArgs>(args: SelectSubset<T, StatusCreateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusCreateManyArgs>(args?: SelectSubset<T, StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends StatusDeleteArgs>(args: SelectSubset<T, StatusDeleteArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateArgs>(args: SelectSubset<T, StatusUpdateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusDeleteManyArgs>(args?: SelectSubset<T, StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateManyArgs>(args: SelectSubset<T, StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpsertArgs>(args: SelectSubset<T, StatusUpsertArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Status model
   */
  readonly fields: StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jogo<T extends Status$jogoArgs<ExtArgs> = {}>(args?: Subset<T, Status$jogoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Status model
   */
  interface StatusFieldRefs {
    readonly id_status: FieldRef<"Status", 'Int'>
    readonly status: FieldRef<"Status", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Status findUnique
   */
  export type StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findFirst
   */
  export type StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findMany
   */
  export type StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status create
   */
  export type StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }

  /**
   * Status createMany
   */
  export type StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status update
   */
  export type StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status upsert
   */
  export type StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }

  /**
   * Status delete
   */
  export type StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to delete.
     */
    limit?: number
  }

  /**
   * Status.jogo
   */
  export type Status$jogoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    cursor?: JogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Status without action
   */
  export type StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    id_avaliacao: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    id_avaliacao: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id_avaliacao: number | null
    descricao: string | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id_avaliacao: number | null
    descricao: string | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id_avaliacao: number
    descricao: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    id_avaliacao?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    id_avaliacao?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id_avaliacao?: true
    descricao?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id_avaliacao?: true
    descricao?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id_avaliacao?: true
    descricao?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id_avaliacao: number
    descricao: string
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_avaliacao?: boolean
    descricao?: boolean
    jogo?: boolean | Avaliacao$jogoArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>



  export type AvaliacaoSelectScalar = {
    id_avaliacao?: boolean
    descricao?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_avaliacao" | "descricao", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogo?: boolean | Avaliacao$jogoArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      jogo: Prisma.$JogoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_avaliacao: number
      descricao: string
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id_avaliacao`
     * const avaliacaoWithId_avaliacaoOnly = await prisma.avaliacao.findMany({ select: { id_avaliacao: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jogo<T extends Avaliacao$jogoArgs<ExtArgs> = {}>(args?: Subset<T, Avaliacao$jogoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id_avaliacao: FieldRef<"Avaliacao", 'Int'>
    readonly descricao: FieldRef<"Avaliacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao.jogo
   */
  export type Avaliacao$jogoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    cursor?: JogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    email: string | null
    nome: string | null
    senha: string | null
    sexo: string | null
    data_nasc: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    email: string | null
    nome: string | null
    senha: string | null
    sexo: string | null
    data_nasc: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    email: number
    nome: number
    senha: number
    sexo: number
    data_nasc: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    email?: true
    nome?: true
    senha?: true
    sexo?: true
    data_nasc?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    email?: true
    nome?: true
    senha?: true
    sexo?: true
    data_nasc?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    email?: true
    nome?: true
    senha?: true
    sexo?: true
    data_nasc?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    email: string
    nome: string
    senha: string
    sexo: string
    data_nasc: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    sexo?: boolean
    data_nasc?: boolean
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    sexo?: boolean
    data_nasc?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "email" | "nome" | "senha" | "sexo" | "data_nasc", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      email: string
      nome: string
      senha: string
      sexo: string
      data_nasc: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly sexo: FieldRef<"Usuario", 'String'>
    readonly data_nasc: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Jogo
   */

  export type AggregateJogo = {
    _count: JogoCountAggregateOutputType | null
    _avg: JogoAvgAggregateOutputType | null
    _sum: JogoSumAggregateOutputType | null
    _min: JogoMinAggregateOutputType | null
    _max: JogoMaxAggregateOutputType | null
  }

  export type JogoAvgAggregateOutputType = {
    id_jogo: number | null
    id_genero: number | null
    id_status: number | null
    id_avaliacao: number | null
  }

  export type JogoSumAggregateOutputType = {
    id_jogo: number | null
    id_genero: number | null
    id_status: number | null
    id_avaliacao: number | null
  }

  export type JogoMinAggregateOutputType = {
    id_jogo: number | null
    id_genero: number | null
    id_status: number | null
    id_avaliacao: number | null
    nome: string | null
    desenvolvedora: string | null
    publisher: string | null
    descricao: string | null
  }

  export type JogoMaxAggregateOutputType = {
    id_jogo: number | null
    id_genero: number | null
    id_status: number | null
    id_avaliacao: number | null
    nome: string | null
    desenvolvedora: string | null
    publisher: string | null
    descricao: string | null
  }

  export type JogoCountAggregateOutputType = {
    id_jogo: number
    id_genero: number
    id_status: number
    id_avaliacao: number
    nome: number
    desenvolvedora: number
    publisher: number
    descricao: number
    _all: number
  }


  export type JogoAvgAggregateInputType = {
    id_jogo?: true
    id_genero?: true
    id_status?: true
    id_avaliacao?: true
  }

  export type JogoSumAggregateInputType = {
    id_jogo?: true
    id_genero?: true
    id_status?: true
    id_avaliacao?: true
  }

  export type JogoMinAggregateInputType = {
    id_jogo?: true
    id_genero?: true
    id_status?: true
    id_avaliacao?: true
    nome?: true
    desenvolvedora?: true
    publisher?: true
    descricao?: true
  }

  export type JogoMaxAggregateInputType = {
    id_jogo?: true
    id_genero?: true
    id_status?: true
    id_avaliacao?: true
    nome?: true
    desenvolvedora?: true
    publisher?: true
    descricao?: true
  }

  export type JogoCountAggregateInputType = {
    id_jogo?: true
    id_genero?: true
    id_status?: true
    id_avaliacao?: true
    nome?: true
    desenvolvedora?: true
    publisher?: true
    descricao?: true
    _all?: true
  }

  export type JogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogo to aggregate.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jogos
    **/
    _count?: true | JogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JogoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JogoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JogoMaxAggregateInputType
  }

  export type GetJogoAggregateType<T extends JogoAggregateArgs> = {
        [P in keyof T & keyof AggregateJogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJogo[P]>
      : GetScalarType<T[P], AggregateJogo[P]>
  }




  export type JogoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithAggregationInput | JogoOrderByWithAggregationInput[]
    by: JogoScalarFieldEnum[] | JogoScalarFieldEnum
    having?: JogoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JogoCountAggregateInputType | true
    _avg?: JogoAvgAggregateInputType
    _sum?: JogoSumAggregateInputType
    _min?: JogoMinAggregateInputType
    _max?: JogoMaxAggregateInputType
  }

  export type JogoGroupByOutputType = {
    id_jogo: number
    id_genero: number
    id_status: number
    id_avaliacao: number
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
    _count: JogoCountAggregateOutputType | null
    _avg: JogoAvgAggregateOutputType | null
    _sum: JogoSumAggregateOutputType | null
    _min: JogoMinAggregateOutputType | null
    _max: JogoMaxAggregateOutputType | null
  }

  type GetJogoGroupByPayload<T extends JogoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JogoGroupByOutputType[P]>
            : GetScalarType<T[P], JogoGroupByOutputType[P]>
        }
      >
    >


  export type JogoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_jogo?: boolean
    id_genero?: boolean
    id_status?: boolean
    id_avaliacao?: boolean
    nome?: boolean
    desenvolvedora?: boolean
    publisher?: boolean
    descricao?: boolean
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    status?: boolean | StatusDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogo"]>



  export type JogoSelectScalar = {
    id_jogo?: boolean
    id_genero?: boolean
    id_status?: boolean
    id_avaliacao?: boolean
    nome?: boolean
    desenvolvedora?: boolean
    publisher?: boolean
    descricao?: boolean
  }

  export type JogoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_jogo" | "id_genero" | "id_status" | "id_avaliacao" | "nome" | "desenvolvedora" | "publisher" | "descricao", ExtArgs["result"]["jogo"]>
  export type JogoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    status?: boolean | StatusDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }

  export type $JogoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jogo"
    objects: {
      genero: Prisma.$GeneroPayload<ExtArgs>
      status: Prisma.$StatusPayload<ExtArgs>
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_jogo: number
      id_genero: number
      id_status: number
      id_avaliacao: number
      nome: string
      desenvolvedora: string
      publisher: string
      descricao: string
    }, ExtArgs["result"]["jogo"]>
    composites: {}
  }

  type JogoGetPayload<S extends boolean | null | undefined | JogoDefaultArgs> = $Result.GetResult<Prisma.$JogoPayload, S>

  type JogoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JogoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JogoCountAggregateInputType | true
    }

  export interface JogoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jogo'], meta: { name: 'Jogo' } }
    /**
     * Find zero or one Jogo that matches the filter.
     * @param {JogoFindUniqueArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JogoFindUniqueArgs>(args: SelectSubset<T, JogoFindUniqueArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jogo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JogoFindUniqueOrThrowArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JogoFindUniqueOrThrowArgs>(args: SelectSubset<T, JogoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jogo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindFirstArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JogoFindFirstArgs>(args?: SelectSubset<T, JogoFindFirstArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jogo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindFirstOrThrowArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JogoFindFirstOrThrowArgs>(args?: SelectSubset<T, JogoFindFirstOrThrowArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jogos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jogos
     * const jogos = await prisma.jogo.findMany()
     * 
     * // Get first 10 Jogos
     * const jogos = await prisma.jogo.findMany({ take: 10 })
     * 
     * // Only select the `id_jogo`
     * const jogoWithId_jogoOnly = await prisma.jogo.findMany({ select: { id_jogo: true } })
     * 
     */
    findMany<T extends JogoFindManyArgs>(args?: SelectSubset<T, JogoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jogo.
     * @param {JogoCreateArgs} args - Arguments to create a Jogo.
     * @example
     * // Create one Jogo
     * const Jogo = await prisma.jogo.create({
     *   data: {
     *     // ... data to create a Jogo
     *   }
     * })
     * 
     */
    create<T extends JogoCreateArgs>(args: SelectSubset<T, JogoCreateArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jogos.
     * @param {JogoCreateManyArgs} args - Arguments to create many Jogos.
     * @example
     * // Create many Jogos
     * const jogo = await prisma.jogo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JogoCreateManyArgs>(args?: SelectSubset<T, JogoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jogo.
     * @param {JogoDeleteArgs} args - Arguments to delete one Jogo.
     * @example
     * // Delete one Jogo
     * const Jogo = await prisma.jogo.delete({
     *   where: {
     *     // ... filter to delete one Jogo
     *   }
     * })
     * 
     */
    delete<T extends JogoDeleteArgs>(args: SelectSubset<T, JogoDeleteArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jogo.
     * @param {JogoUpdateArgs} args - Arguments to update one Jogo.
     * @example
     * // Update one Jogo
     * const jogo = await prisma.jogo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JogoUpdateArgs>(args: SelectSubset<T, JogoUpdateArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jogos.
     * @param {JogoDeleteManyArgs} args - Arguments to filter Jogos to delete.
     * @example
     * // Delete a few Jogos
     * const { count } = await prisma.jogo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JogoDeleteManyArgs>(args?: SelectSubset<T, JogoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jogos
     * const jogo = await prisma.jogo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JogoUpdateManyArgs>(args: SelectSubset<T, JogoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jogo.
     * @param {JogoUpsertArgs} args - Arguments to update or create a Jogo.
     * @example
     * // Update or create a Jogo
     * const jogo = await prisma.jogo.upsert({
     *   create: {
     *     // ... data to create a Jogo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jogo we want to update
     *   }
     * })
     */
    upsert<T extends JogoUpsertArgs>(args: SelectSubset<T, JogoUpsertArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoCountArgs} args - Arguments to filter Jogos to count.
     * @example
     * // Count the number of Jogos
     * const count = await prisma.jogo.count({
     *   where: {
     *     // ... the filter for the Jogos we want to count
     *   }
     * })
    **/
    count<T extends JogoCountArgs>(
      args?: Subset<T, JogoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JogoAggregateArgs>(args: Subset<T, JogoAggregateArgs>): Prisma.PrismaPromise<GetJogoAggregateType<T>>

    /**
     * Group by Jogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JogoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JogoGroupByArgs['orderBy'] }
        : { orderBy?: JogoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JogoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jogo model
   */
  readonly fields: JogoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jogo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JogoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genero<T extends GeneroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneroDefaultArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends StatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatusDefaultArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    avaliacao<T extends AvaliacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvaliacaoDefaultArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jogo model
   */
  interface JogoFieldRefs {
    readonly id_jogo: FieldRef<"Jogo", 'Int'>
    readonly id_genero: FieldRef<"Jogo", 'Int'>
    readonly id_status: FieldRef<"Jogo", 'Int'>
    readonly id_avaliacao: FieldRef<"Jogo", 'Int'>
    readonly nome: FieldRef<"Jogo", 'String'>
    readonly desenvolvedora: FieldRef<"Jogo", 'String'>
    readonly publisher: FieldRef<"Jogo", 'String'>
    readonly descricao: FieldRef<"Jogo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jogo findUnique
   */
  export type JogoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo findUniqueOrThrow
   */
  export type JogoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo findFirst
   */
  export type JogoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogos.
     */
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo findFirstOrThrow
   */
  export type JogoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogos.
     */
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo findMany
   */
  export type JogoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogos to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo create
   */
  export type JogoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The data needed to create a Jogo.
     */
    data: XOR<JogoCreateInput, JogoUncheckedCreateInput>
  }

  /**
   * Jogo createMany
   */
  export type JogoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jogos.
     */
    data: JogoCreateManyInput | JogoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jogo update
   */
  export type JogoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The data needed to update a Jogo.
     */
    data: XOR<JogoUpdateInput, JogoUncheckedUpdateInput>
    /**
     * Choose, which Jogo to update.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo updateMany
   */
  export type JogoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jogos.
     */
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyInput>
    /**
     * Filter which Jogos to update
     */
    where?: JogoWhereInput
    /**
     * Limit how many Jogos to update.
     */
    limit?: number
  }

  /**
   * Jogo upsert
   */
  export type JogoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The filter to search for the Jogo to update in case it exists.
     */
    where: JogoWhereUniqueInput
    /**
     * In case the Jogo found by the `where` argument doesn't exist, create a new Jogo with this data.
     */
    create: XOR<JogoCreateInput, JogoUncheckedCreateInput>
    /**
     * In case the Jogo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JogoUpdateInput, JogoUncheckedUpdateInput>
  }

  /**
   * Jogo delete
   */
  export type JogoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter which Jogo to delete.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo deleteMany
   */
  export type JogoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogos to delete
     */
    where?: JogoWhereInput
    /**
     * Limit how many Jogos to delete.
     */
    limit?: number
  }

  /**
   * Jogo without action
   */
  export type JogoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GeneroScalarFieldEnum: {
    id_genero: 'id_genero',
    genero: 'genero'
  };

  export type GeneroScalarFieldEnum = (typeof GeneroScalarFieldEnum)[keyof typeof GeneroScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    id_status: 'id_status',
    status: 'status'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id_avaliacao: 'id_avaliacao',
    descricao: 'descricao'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    email: 'email',
    nome: 'nome',
    senha: 'senha',
    sexo: 'sexo',
    data_nasc: 'data_nasc'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const JogoScalarFieldEnum: {
    id_jogo: 'id_jogo',
    id_genero: 'id_genero',
    id_status: 'id_status',
    id_avaliacao: 'id_avaliacao',
    nome: 'nome',
    desenvolvedora: 'desenvolvedora',
    publisher: 'publisher',
    descricao: 'descricao'
  };

  export type JogoScalarFieldEnum = (typeof JogoScalarFieldEnum)[keyof typeof JogoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const GeneroOrderByRelevanceFieldEnum: {
    genero: 'genero'
  };

  export type GeneroOrderByRelevanceFieldEnum = (typeof GeneroOrderByRelevanceFieldEnum)[keyof typeof GeneroOrderByRelevanceFieldEnum]


  export const StatusOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type StatusOrderByRelevanceFieldEnum = (typeof StatusOrderByRelevanceFieldEnum)[keyof typeof StatusOrderByRelevanceFieldEnum]


  export const AvaliacaoOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type AvaliacaoOrderByRelevanceFieldEnum = (typeof AvaliacaoOrderByRelevanceFieldEnum)[keyof typeof AvaliacaoOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    email: 'email',
    nome: 'nome',
    senha: 'senha',
    sexo: 'sexo',
    data_nasc: 'data_nasc'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const JogoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    desenvolvedora: 'desenvolvedora',
    publisher: 'publisher',
    descricao: 'descricao'
  };

  export type JogoOrderByRelevanceFieldEnum = (typeof JogoOrderByRelevanceFieldEnum)[keyof typeof JogoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type GeneroWhereInput = {
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    id_genero?: IntFilter<"Genero"> | number
    genero?: StringFilter<"Genero"> | string
    jogo?: JogoListRelationFilter
  }

  export type GeneroOrderByWithRelationInput = {
    id_genero?: SortOrder
    genero?: SortOrder
    jogo?: JogoOrderByRelationAggregateInput
    _relevance?: GeneroOrderByRelevanceInput
  }

  export type GeneroWhereUniqueInput = Prisma.AtLeast<{
    id_genero?: number
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    genero?: StringFilter<"Genero"> | string
    jogo?: JogoListRelationFilter
  }, "id_genero">

  export type GeneroOrderByWithAggregationInput = {
    id_genero?: SortOrder
    genero?: SortOrder
    _count?: GeneroCountOrderByAggregateInput
    _avg?: GeneroAvgOrderByAggregateInput
    _max?: GeneroMaxOrderByAggregateInput
    _min?: GeneroMinOrderByAggregateInput
    _sum?: GeneroSumOrderByAggregateInput
  }

  export type GeneroScalarWhereWithAggregatesInput = {
    AND?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    OR?: GeneroScalarWhereWithAggregatesInput[]
    NOT?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    id_genero?: IntWithAggregatesFilter<"Genero"> | number
    genero?: StringWithAggregatesFilter<"Genero"> | string
  }

  export type StatusWhereInput = {
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    id_status?: IntFilter<"Status"> | number
    status?: StringFilter<"Status"> | string
    jogo?: JogoListRelationFilter
  }

  export type StatusOrderByWithRelationInput = {
    id_status?: SortOrder
    status?: SortOrder
    jogo?: JogoOrderByRelationAggregateInput
    _relevance?: StatusOrderByRelevanceInput
  }

  export type StatusWhereUniqueInput = Prisma.AtLeast<{
    id_status?: number
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    status?: StringFilter<"Status"> | string
    jogo?: JogoListRelationFilter
  }, "id_status">

  export type StatusOrderByWithAggregationInput = {
    id_status?: SortOrder
    status?: SortOrder
    _count?: StatusCountOrderByAggregateInput
    _avg?: StatusAvgOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
    _sum?: StatusSumOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    OR?: StatusScalarWhereWithAggregatesInput[]
    NOT?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    id_status?: IntWithAggregatesFilter<"Status"> | number
    status?: StringWithAggregatesFilter<"Status"> | string
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id_avaliacao?: IntFilter<"Avaliacao"> | number
    descricao?: StringFilter<"Avaliacao"> | string
    jogo?: JogoListRelationFilter
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id_avaliacao?: SortOrder
    descricao?: SortOrder
    jogo?: JogoOrderByRelationAggregateInput
    _relevance?: AvaliacaoOrderByRelevanceInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id_avaliacao?: number
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    descricao?: StringFilter<"Avaliacao"> | string
    jogo?: JogoListRelationFilter
  }, "id_avaliacao">

  export type AvaliacaoOrderByWithAggregationInput = {
    id_avaliacao?: SortOrder
    descricao?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id_avaliacao?: IntWithAggregatesFilter<"Avaliacao"> | number
    descricao?: StringWithAggregatesFilter<"Avaliacao"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    sexo?: StringFilter<"Usuario"> | string
    data_nasc?: StringFilter<"Usuario"> | string
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    sexo?: SortOrder
    data_nasc?: SortOrder
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    sexo?: StringFilter<"Usuario"> | string
    data_nasc?: StringFilter<"Usuario"> | string
  }, "id_usuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    sexo?: SortOrder
    data_nasc?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    sexo?: StringWithAggregatesFilter<"Usuario"> | string
    data_nasc?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type JogoWhereInput = {
    AND?: JogoWhereInput | JogoWhereInput[]
    OR?: JogoWhereInput[]
    NOT?: JogoWhereInput | JogoWhereInput[]
    id_jogo?: IntFilter<"Jogo"> | number
    id_genero?: IntFilter<"Jogo"> | number
    id_status?: IntFilter<"Jogo"> | number
    id_avaliacao?: IntFilter<"Jogo"> | number
    nome?: StringFilter<"Jogo"> | string
    desenvolvedora?: StringFilter<"Jogo"> | string
    publisher?: StringFilter<"Jogo"> | string
    descricao?: StringFilter<"Jogo"> | string
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
    status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
  }

  export type JogoOrderByWithRelationInput = {
    id_jogo?: SortOrder
    id_genero?: SortOrder
    id_status?: SortOrder
    id_avaliacao?: SortOrder
    nome?: SortOrder
    desenvolvedora?: SortOrder
    publisher?: SortOrder
    descricao?: SortOrder
    genero?: GeneroOrderByWithRelationInput
    status?: StatusOrderByWithRelationInput
    avaliacao?: AvaliacaoOrderByWithRelationInput
    _relevance?: JogoOrderByRelevanceInput
  }

  export type JogoWhereUniqueInput = Prisma.AtLeast<{
    id_jogo?: number
    AND?: JogoWhereInput | JogoWhereInput[]
    OR?: JogoWhereInput[]
    NOT?: JogoWhereInput | JogoWhereInput[]
    id_genero?: IntFilter<"Jogo"> | number
    id_status?: IntFilter<"Jogo"> | number
    id_avaliacao?: IntFilter<"Jogo"> | number
    nome?: StringFilter<"Jogo"> | string
    desenvolvedora?: StringFilter<"Jogo"> | string
    publisher?: StringFilter<"Jogo"> | string
    descricao?: StringFilter<"Jogo"> | string
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
    status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
  }, "id_jogo">

  export type JogoOrderByWithAggregationInput = {
    id_jogo?: SortOrder
    id_genero?: SortOrder
    id_status?: SortOrder
    id_avaliacao?: SortOrder
    nome?: SortOrder
    desenvolvedora?: SortOrder
    publisher?: SortOrder
    descricao?: SortOrder
    _count?: JogoCountOrderByAggregateInput
    _avg?: JogoAvgOrderByAggregateInput
    _max?: JogoMaxOrderByAggregateInput
    _min?: JogoMinOrderByAggregateInput
    _sum?: JogoSumOrderByAggregateInput
  }

  export type JogoScalarWhereWithAggregatesInput = {
    AND?: JogoScalarWhereWithAggregatesInput | JogoScalarWhereWithAggregatesInput[]
    OR?: JogoScalarWhereWithAggregatesInput[]
    NOT?: JogoScalarWhereWithAggregatesInput | JogoScalarWhereWithAggregatesInput[]
    id_jogo?: IntWithAggregatesFilter<"Jogo"> | number
    id_genero?: IntWithAggregatesFilter<"Jogo"> | number
    id_status?: IntWithAggregatesFilter<"Jogo"> | number
    id_avaliacao?: IntWithAggregatesFilter<"Jogo"> | number
    nome?: StringWithAggregatesFilter<"Jogo"> | string
    desenvolvedora?: StringWithAggregatesFilter<"Jogo"> | string
    publisher?: StringWithAggregatesFilter<"Jogo"> | string
    descricao?: StringWithAggregatesFilter<"Jogo"> | string
  }

  export type GeneroCreateInput = {
    id_genero: number
    genero: string
    jogo?: JogoCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateInput = {
    id_genero: number
    genero: string
    jogo?: JogoUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUpdateInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    jogo?: JogoUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    jogo?: JogoUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroCreateManyInput = {
    id_genero: number
    genero: string
  }

  export type GeneroUpdateManyMutationInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateManyInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
  }

  export type StatusCreateInput = {
    id_status: number
    status: string
    jogo?: JogoCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateInput = {
    id_status: number
    status: string
    jogo?: JogoUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusUpdateInput = {
    id_status?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    jogo?: JogoUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateInput = {
    id_status?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    jogo?: JogoUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusCreateManyInput = {
    id_status: number
    status: string
  }

  export type StatusUpdateManyMutationInput = {
    id_status?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateManyInput = {
    id_status?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoCreateInput = {
    id_avaliacao: number
    descricao: string
    jogo?: JogoCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id_avaliacao: number
    descricao: string
    jogo?: JogoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUpdateInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    jogo?: JogoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    jogo?: JogoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoCreateManyInput = {
    id_avaliacao: number
    descricao: string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    email: string
    nome: string
    senha: string
    sexo?: string
    data_nasc: string
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    email: string
    nome: string
    senha: string
    sexo?: string
    data_nasc: string
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    data_nasc?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    data_nasc?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    email: string
    nome: string
    senha: string
    sexo?: string
    data_nasc: string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    data_nasc?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    sexo?: StringFieldUpdateOperationsInput | string
    data_nasc?: StringFieldUpdateOperationsInput | string
  }

  export type JogoCreateInput = {
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
    genero: GeneroCreateNestedOneWithoutJogoInput
    status: StatusCreateNestedOneWithoutJogoInput
    avaliacao: AvaliacaoCreateNestedOneWithoutJogoInput
  }

  export type JogoUncheckedCreateInput = {
    id_jogo?: number
    id_genero: number
    id_status: number
    id_avaliacao: number
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
  }

  export type JogoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    genero?: GeneroUpdateOneRequiredWithoutJogoNestedInput
    status?: StatusUpdateOneRequiredWithoutJogoNestedInput
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateInput = {
    id_jogo?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    id_status?: IntFieldUpdateOperationsInput | number
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type JogoCreateManyInput = {
    id_jogo?: number
    id_genero: number
    id_status: number
    id_avaliacao: number
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
  }

  export type JogoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type JogoUncheckedUpdateManyInput = {
    id_jogo?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    id_status?: IntFieldUpdateOperationsInput | number
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type JogoListRelationFilter = {
    every?: JogoWhereInput
    some?: JogoWhereInput
    none?: JogoWhereInput
  }

  export type JogoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneroOrderByRelevanceInput = {
    fields: GeneroOrderByRelevanceFieldEnum | GeneroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GeneroCountOrderByAggregateInput = {
    id_genero?: SortOrder
    genero?: SortOrder
  }

  export type GeneroAvgOrderByAggregateInput = {
    id_genero?: SortOrder
  }

  export type GeneroMaxOrderByAggregateInput = {
    id_genero?: SortOrder
    genero?: SortOrder
  }

  export type GeneroMinOrderByAggregateInput = {
    id_genero?: SortOrder
    genero?: SortOrder
  }

  export type GeneroSumOrderByAggregateInput = {
    id_genero?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StatusOrderByRelevanceInput = {
    fields: StatusOrderByRelevanceFieldEnum | StatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StatusCountOrderByAggregateInput = {
    id_status?: SortOrder
    status?: SortOrder
  }

  export type StatusAvgOrderByAggregateInput = {
    id_status?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    id_status?: SortOrder
    status?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    id_status?: SortOrder
    status?: SortOrder
  }

  export type StatusSumOrderByAggregateInput = {
    id_status?: SortOrder
  }

  export type AvaliacaoOrderByRelevanceInput = {
    fields: AvaliacaoOrderByRelevanceFieldEnum | AvaliacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    descricao?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    id_avaliacao?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    descricao?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    descricao?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    id_avaliacao?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    sexo?: SortOrder
    data_nasc?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    sexo?: SortOrder
    data_nasc?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    sexo?: SortOrder
    data_nasc?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type GeneroScalarRelationFilter = {
    is?: GeneroWhereInput
    isNot?: GeneroWhereInput
  }

  export type StatusScalarRelationFilter = {
    is?: StatusWhereInput
    isNot?: StatusWhereInput
  }

  export type AvaliacaoScalarRelationFilter = {
    is?: AvaliacaoWhereInput
    isNot?: AvaliacaoWhereInput
  }

  export type JogoOrderByRelevanceInput = {
    fields: JogoOrderByRelevanceFieldEnum | JogoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JogoCountOrderByAggregateInput = {
    id_jogo?: SortOrder
    id_genero?: SortOrder
    id_status?: SortOrder
    id_avaliacao?: SortOrder
    nome?: SortOrder
    desenvolvedora?: SortOrder
    publisher?: SortOrder
    descricao?: SortOrder
  }

  export type JogoAvgOrderByAggregateInput = {
    id_jogo?: SortOrder
    id_genero?: SortOrder
    id_status?: SortOrder
    id_avaliacao?: SortOrder
  }

  export type JogoMaxOrderByAggregateInput = {
    id_jogo?: SortOrder
    id_genero?: SortOrder
    id_status?: SortOrder
    id_avaliacao?: SortOrder
    nome?: SortOrder
    desenvolvedora?: SortOrder
    publisher?: SortOrder
    descricao?: SortOrder
  }

  export type JogoMinOrderByAggregateInput = {
    id_jogo?: SortOrder
    id_genero?: SortOrder
    id_status?: SortOrder
    id_avaliacao?: SortOrder
    nome?: SortOrder
    desenvolvedora?: SortOrder
    publisher?: SortOrder
    descricao?: SortOrder
  }

  export type JogoSumOrderByAggregateInput = {
    id_jogo?: SortOrder
    id_genero?: SortOrder
    id_status?: SortOrder
    id_avaliacao?: SortOrder
  }

  export type JogoCreateNestedManyWithoutGeneroInput = {
    create?: XOR<JogoCreateWithoutGeneroInput, JogoUncheckedCreateWithoutGeneroInput> | JogoCreateWithoutGeneroInput[] | JogoUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutGeneroInput | JogoCreateOrConnectWithoutGeneroInput[]
    createMany?: JogoCreateManyGeneroInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type JogoUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<JogoCreateWithoutGeneroInput, JogoUncheckedCreateWithoutGeneroInput> | JogoCreateWithoutGeneroInput[] | JogoUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutGeneroInput | JogoCreateOrConnectWithoutGeneroInput[]
    createMany?: JogoCreateManyGeneroInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type JogoUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<JogoCreateWithoutGeneroInput, JogoUncheckedCreateWithoutGeneroInput> | JogoCreateWithoutGeneroInput[] | JogoUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutGeneroInput | JogoCreateOrConnectWithoutGeneroInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutGeneroInput | JogoUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: JogoCreateManyGeneroInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutGeneroInput | JogoUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutGeneroInput | JogoUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type JogoUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<JogoCreateWithoutGeneroInput, JogoUncheckedCreateWithoutGeneroInput> | JogoCreateWithoutGeneroInput[] | JogoUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutGeneroInput | JogoCreateOrConnectWithoutGeneroInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutGeneroInput | JogoUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: JogoCreateManyGeneroInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutGeneroInput | JogoUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutGeneroInput | JogoUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type JogoCreateNestedManyWithoutStatusInput = {
    create?: XOR<JogoCreateWithoutStatusInput, JogoUncheckedCreateWithoutStatusInput> | JogoCreateWithoutStatusInput[] | JogoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutStatusInput | JogoCreateOrConnectWithoutStatusInput[]
    createMany?: JogoCreateManyStatusInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type JogoUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<JogoCreateWithoutStatusInput, JogoUncheckedCreateWithoutStatusInput> | JogoCreateWithoutStatusInput[] | JogoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutStatusInput | JogoCreateOrConnectWithoutStatusInput[]
    createMany?: JogoCreateManyStatusInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type JogoUpdateManyWithoutStatusNestedInput = {
    create?: XOR<JogoCreateWithoutStatusInput, JogoUncheckedCreateWithoutStatusInput> | JogoCreateWithoutStatusInput[] | JogoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutStatusInput | JogoCreateOrConnectWithoutStatusInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutStatusInput | JogoUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: JogoCreateManyStatusInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutStatusInput | JogoUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutStatusInput | JogoUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type JogoUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<JogoCreateWithoutStatusInput, JogoUncheckedCreateWithoutStatusInput> | JogoCreateWithoutStatusInput[] | JogoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutStatusInput | JogoCreateOrConnectWithoutStatusInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutStatusInput | JogoUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: JogoCreateManyStatusInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutStatusInput | JogoUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutStatusInput | JogoUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type JogoCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<JogoCreateWithoutAvaliacaoInput, JogoUncheckedCreateWithoutAvaliacaoInput> | JogoCreateWithoutAvaliacaoInput[] | JogoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutAvaliacaoInput | JogoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: JogoCreateManyAvaliacaoInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type JogoUncheckedCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<JogoCreateWithoutAvaliacaoInput, JogoUncheckedCreateWithoutAvaliacaoInput> | JogoCreateWithoutAvaliacaoInput[] | JogoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutAvaliacaoInput | JogoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: JogoCreateManyAvaliacaoInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type JogoUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<JogoCreateWithoutAvaliacaoInput, JogoUncheckedCreateWithoutAvaliacaoInput> | JogoCreateWithoutAvaliacaoInput[] | JogoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutAvaliacaoInput | JogoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutAvaliacaoInput | JogoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: JogoCreateManyAvaliacaoInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutAvaliacaoInput | JogoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutAvaliacaoInput | JogoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type JogoUncheckedUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<JogoCreateWithoutAvaliacaoInput, JogoUncheckedCreateWithoutAvaliacaoInput> | JogoCreateWithoutAvaliacaoInput[] | JogoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutAvaliacaoInput | JogoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutAvaliacaoInput | JogoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: JogoCreateManyAvaliacaoInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutAvaliacaoInput | JogoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutAvaliacaoInput | JogoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type GeneroCreateNestedOneWithoutJogoInput = {
    create?: XOR<GeneroCreateWithoutJogoInput, GeneroUncheckedCreateWithoutJogoInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutJogoInput
    connect?: GeneroWhereUniqueInput
  }

  export type StatusCreateNestedOneWithoutJogoInput = {
    create?: XOR<StatusCreateWithoutJogoInput, StatusUncheckedCreateWithoutJogoInput>
    connectOrCreate?: StatusCreateOrConnectWithoutJogoInput
    connect?: StatusWhereUniqueInput
  }

  export type AvaliacaoCreateNestedOneWithoutJogoInput = {
    create?: XOR<AvaliacaoCreateWithoutJogoInput, AvaliacaoUncheckedCreateWithoutJogoInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutJogoInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type GeneroUpdateOneRequiredWithoutJogoNestedInput = {
    create?: XOR<GeneroCreateWithoutJogoInput, GeneroUncheckedCreateWithoutJogoInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutJogoInput
    upsert?: GeneroUpsertWithoutJogoInput
    connect?: GeneroWhereUniqueInput
    update?: XOR<XOR<GeneroUpdateToOneWithWhereWithoutJogoInput, GeneroUpdateWithoutJogoInput>, GeneroUncheckedUpdateWithoutJogoInput>
  }

  export type StatusUpdateOneRequiredWithoutJogoNestedInput = {
    create?: XOR<StatusCreateWithoutJogoInput, StatusUncheckedCreateWithoutJogoInput>
    connectOrCreate?: StatusCreateOrConnectWithoutJogoInput
    upsert?: StatusUpsertWithoutJogoInput
    connect?: StatusWhereUniqueInput
    update?: XOR<XOR<StatusUpdateToOneWithWhereWithoutJogoInput, StatusUpdateWithoutJogoInput>, StatusUncheckedUpdateWithoutJogoInput>
  }

  export type AvaliacaoUpdateOneRequiredWithoutJogoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutJogoInput, AvaliacaoUncheckedCreateWithoutJogoInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutJogoInput
    upsert?: AvaliacaoUpsertWithoutJogoInput
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutJogoInput, AvaliacaoUpdateWithoutJogoInput>, AvaliacaoUncheckedUpdateWithoutJogoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type JogoCreateWithoutGeneroInput = {
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
    status: StatusCreateNestedOneWithoutJogoInput
    avaliacao: AvaliacaoCreateNestedOneWithoutJogoInput
  }

  export type JogoUncheckedCreateWithoutGeneroInput = {
    id_jogo?: number
    id_status: number
    id_avaliacao: number
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
  }

  export type JogoCreateOrConnectWithoutGeneroInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutGeneroInput, JogoUncheckedCreateWithoutGeneroInput>
  }

  export type JogoCreateManyGeneroInputEnvelope = {
    data: JogoCreateManyGeneroInput | JogoCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type JogoUpsertWithWhereUniqueWithoutGeneroInput = {
    where: JogoWhereUniqueInput
    update: XOR<JogoUpdateWithoutGeneroInput, JogoUncheckedUpdateWithoutGeneroInput>
    create: XOR<JogoCreateWithoutGeneroInput, JogoUncheckedCreateWithoutGeneroInput>
  }

  export type JogoUpdateWithWhereUniqueWithoutGeneroInput = {
    where: JogoWhereUniqueInput
    data: XOR<JogoUpdateWithoutGeneroInput, JogoUncheckedUpdateWithoutGeneroInput>
  }

  export type JogoUpdateManyWithWhereWithoutGeneroInput = {
    where: JogoScalarWhereInput
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyWithoutGeneroInput>
  }

  export type JogoScalarWhereInput = {
    AND?: JogoScalarWhereInput | JogoScalarWhereInput[]
    OR?: JogoScalarWhereInput[]
    NOT?: JogoScalarWhereInput | JogoScalarWhereInput[]
    id_jogo?: IntFilter<"Jogo"> | number
    id_genero?: IntFilter<"Jogo"> | number
    id_status?: IntFilter<"Jogo"> | number
    id_avaliacao?: IntFilter<"Jogo"> | number
    nome?: StringFilter<"Jogo"> | string
    desenvolvedora?: StringFilter<"Jogo"> | string
    publisher?: StringFilter<"Jogo"> | string
    descricao?: StringFilter<"Jogo"> | string
  }

  export type JogoCreateWithoutStatusInput = {
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
    genero: GeneroCreateNestedOneWithoutJogoInput
    avaliacao: AvaliacaoCreateNestedOneWithoutJogoInput
  }

  export type JogoUncheckedCreateWithoutStatusInput = {
    id_jogo?: number
    id_genero: number
    id_avaliacao: number
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
  }

  export type JogoCreateOrConnectWithoutStatusInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutStatusInput, JogoUncheckedCreateWithoutStatusInput>
  }

  export type JogoCreateManyStatusInputEnvelope = {
    data: JogoCreateManyStatusInput | JogoCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type JogoUpsertWithWhereUniqueWithoutStatusInput = {
    where: JogoWhereUniqueInput
    update: XOR<JogoUpdateWithoutStatusInput, JogoUncheckedUpdateWithoutStatusInput>
    create: XOR<JogoCreateWithoutStatusInput, JogoUncheckedCreateWithoutStatusInput>
  }

  export type JogoUpdateWithWhereUniqueWithoutStatusInput = {
    where: JogoWhereUniqueInput
    data: XOR<JogoUpdateWithoutStatusInput, JogoUncheckedUpdateWithoutStatusInput>
  }

  export type JogoUpdateManyWithWhereWithoutStatusInput = {
    where: JogoScalarWhereInput
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyWithoutStatusInput>
  }

  export type JogoCreateWithoutAvaliacaoInput = {
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
    genero: GeneroCreateNestedOneWithoutJogoInput
    status: StatusCreateNestedOneWithoutJogoInput
  }

  export type JogoUncheckedCreateWithoutAvaliacaoInput = {
    id_jogo?: number
    id_genero: number
    id_status: number
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
  }

  export type JogoCreateOrConnectWithoutAvaliacaoInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutAvaliacaoInput, JogoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type JogoCreateManyAvaliacaoInputEnvelope = {
    data: JogoCreateManyAvaliacaoInput | JogoCreateManyAvaliacaoInput[]
    skipDuplicates?: boolean
  }

  export type JogoUpsertWithWhereUniqueWithoutAvaliacaoInput = {
    where: JogoWhereUniqueInput
    update: XOR<JogoUpdateWithoutAvaliacaoInput, JogoUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<JogoCreateWithoutAvaliacaoInput, JogoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type JogoUpdateWithWhereUniqueWithoutAvaliacaoInput = {
    where: JogoWhereUniqueInput
    data: XOR<JogoUpdateWithoutAvaliacaoInput, JogoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type JogoUpdateManyWithWhereWithoutAvaliacaoInput = {
    where: JogoScalarWhereInput
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyWithoutAvaliacaoInput>
  }

  export type GeneroCreateWithoutJogoInput = {
    id_genero: number
    genero: string
  }

  export type GeneroUncheckedCreateWithoutJogoInput = {
    id_genero: number
    genero: string
  }

  export type GeneroCreateOrConnectWithoutJogoInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutJogoInput, GeneroUncheckedCreateWithoutJogoInput>
  }

  export type StatusCreateWithoutJogoInput = {
    id_status: number
    status: string
  }

  export type StatusUncheckedCreateWithoutJogoInput = {
    id_status: number
    status: string
  }

  export type StatusCreateOrConnectWithoutJogoInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutJogoInput, StatusUncheckedCreateWithoutJogoInput>
  }

  export type AvaliacaoCreateWithoutJogoInput = {
    id_avaliacao: number
    descricao: string
  }

  export type AvaliacaoUncheckedCreateWithoutJogoInput = {
    id_avaliacao: number
    descricao: string
  }

  export type AvaliacaoCreateOrConnectWithoutJogoInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutJogoInput, AvaliacaoUncheckedCreateWithoutJogoInput>
  }

  export type GeneroUpsertWithoutJogoInput = {
    update: XOR<GeneroUpdateWithoutJogoInput, GeneroUncheckedUpdateWithoutJogoInput>
    create: XOR<GeneroCreateWithoutJogoInput, GeneroUncheckedCreateWithoutJogoInput>
    where?: GeneroWhereInput
  }

  export type GeneroUpdateToOneWithWhereWithoutJogoInput = {
    where?: GeneroWhereInput
    data: XOR<GeneroUpdateWithoutJogoInput, GeneroUncheckedUpdateWithoutJogoInput>
  }

  export type GeneroUpdateWithoutJogoInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateWithoutJogoInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUpsertWithoutJogoInput = {
    update: XOR<StatusUpdateWithoutJogoInput, StatusUncheckedUpdateWithoutJogoInput>
    create: XOR<StatusCreateWithoutJogoInput, StatusUncheckedCreateWithoutJogoInput>
    where?: StatusWhereInput
  }

  export type StatusUpdateToOneWithWhereWithoutJogoInput = {
    where?: StatusWhereInput
    data: XOR<StatusUpdateWithoutJogoInput, StatusUncheckedUpdateWithoutJogoInput>
  }

  export type StatusUpdateWithoutJogoInput = {
    id_status?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateWithoutJogoInput = {
    id_status?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUpsertWithoutJogoInput = {
    update: XOR<AvaliacaoUpdateWithoutJogoInput, AvaliacaoUncheckedUpdateWithoutJogoInput>
    create: XOR<AvaliacaoCreateWithoutJogoInput, AvaliacaoUncheckedCreateWithoutJogoInput>
    where?: AvaliacaoWhereInput
  }

  export type AvaliacaoUpdateToOneWithWhereWithoutJogoInput = {
    where?: AvaliacaoWhereInput
    data: XOR<AvaliacaoUpdateWithoutJogoInput, AvaliacaoUncheckedUpdateWithoutJogoInput>
  }

  export type AvaliacaoUpdateWithoutJogoInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUncheckedUpdateWithoutJogoInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type JogoCreateManyGeneroInput = {
    id_jogo?: number
    id_status: number
    id_avaliacao: number
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
  }

  export type JogoUpdateWithoutGeneroInput = {
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StatusUpdateOneRequiredWithoutJogoNestedInput
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateWithoutGeneroInput = {
    id_jogo?: IntFieldUpdateOperationsInput | number
    id_status?: IntFieldUpdateOperationsInput | number
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type JogoUncheckedUpdateManyWithoutGeneroInput = {
    id_jogo?: IntFieldUpdateOperationsInput | number
    id_status?: IntFieldUpdateOperationsInput | number
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type JogoCreateManyStatusInput = {
    id_jogo?: number
    id_genero: number
    id_avaliacao: number
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
  }

  export type JogoUpdateWithoutStatusInput = {
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    genero?: GeneroUpdateOneRequiredWithoutJogoNestedInput
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateWithoutStatusInput = {
    id_jogo?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type JogoUncheckedUpdateManyWithoutStatusInput = {
    id_jogo?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type JogoCreateManyAvaliacaoInput = {
    id_jogo?: number
    id_genero: number
    id_status: number
    nome: string
    desenvolvedora: string
    publisher: string
    descricao: string
  }

  export type JogoUpdateWithoutAvaliacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    genero?: GeneroUpdateOneRequiredWithoutJogoNestedInput
    status?: StatusUpdateOneRequiredWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateWithoutAvaliacaoInput = {
    id_jogo?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    id_status?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type JogoUncheckedUpdateManyWithoutAvaliacaoInput = {
    id_jogo?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    id_status?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desenvolvedora?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}