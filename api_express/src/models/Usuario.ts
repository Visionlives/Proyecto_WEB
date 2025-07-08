import { BeforeCreate, Column, DataType, Model, Table} from "sequelize-typescript";
import bcrypt from "bcrypt"

// Typescript usa la convencion camelCase
// Las tablas y los campos usan la convencion snake_case

@Table({tableName: "usuarios"}) 
class Usuario extends Model{ 
    @Column({type:DataType.STRING(50), primaryKey: true, allowNull: false, validate: {isEmail: true} })
    declare email: string

    @Column({type:DataType.STRING(60), allowNull: false})
    declare password: string

    @BeforeCreate
    static async hashPassword(usuario: Usuario){
        usuario.password = await bcrypt.hash(usuario.password, 10)
    }
}

export default Usuario