import { Column, DataType, Model, Table } from "sequelize-typescript";

// Typescript usa la convencion camelCase
// Las tablas y los campos usan la convencion snake_case

@Table({tableName: "arriendos"}) 
class Arriendo extends Model{ // El ID del arreindo lo asume Sequelize como un entero autoincrementable
    @Column({type:DataType.DATE, field: "fecha_inicio"})
    declare fechaInicio: Date

    @Column({type:DataType.DATE, field: "fecha_fin"}) // AllowNull se asume como "true" en caso de no especificarlo
    declare fechaFin: Date

    @Column({type:DataType.STRING(6), field: "patente_vehiculo"})
    declare patenteVehiculo: string

    @Column({type:DataType.STRING(20), field: "tipo_vehiculo"})
    declare tipoVehiculo: string

    @Column({type:DataType.STRING(10), field: "rut_cliente"})
    declare rutCliente: string

    @Column({type:DataType.STRING(50), field: "nombre_cliente"})
    declare nombreCliente: string
}

export default Arriendo