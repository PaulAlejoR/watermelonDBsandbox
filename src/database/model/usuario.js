import { Model } from "@nozbe/watermelondb";
import { children, field, text } from "@nozbe/watermelondb/decorators";

export default class Usuario extends Model {
    static table = 'usuarios';

    static associations = {
        recetas: { type: 'hasMany', foreignKey: 'usuario_id'},
        citas: { type: 'hasMany', foreignKey: 'usuario_id'}
    }

    @text('nombre') nombre;
    @field('apellido_p') apellidoP
    @field('apellido_m') apellidoM;
    @field('edad') edad;
    @field('fecha_nacimiento') fechaNacimiento;
    
    
    @children('recetas') recetas;
    @children('citas') citas;
}