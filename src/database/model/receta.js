import { Model } from '@nozbe/watermelondb';
import { children, field, text } from '@nozbe/watermelondb/decorators';

export default class Receta extends Model {
    static table = 'recetas';
    static associations = {
        usuarios: {
            type: 'hasMany', foreignKey: 'med_catalogo_id',
            type: 'belongs_to', key: 'usuario_id'
        }
    };
    
    @field('dosis_cantidad') dosisCantidad;
    @text('dosis_unidad') dosisUnidad;
    @text('frecuencia') frecuencia;

    @field('fecha_inicio') fechaInicio
    @field('fecha_fin') fechaFin;

    @field('is_activo') isActivo;

    @text('instrucciones_adicionales') instruccionesAdicionales
    @field('hora_ingesta') horaIngesta;
    @field('dias_semana') diasSemana;

    @field('estado_toma') estadoToma;
    @field('fecha_registro_toma') fechaRegistroToma;

    @children('med_catalogo_id') medCatalogo;
    @children('horario_id') horarioMedicacion;
}