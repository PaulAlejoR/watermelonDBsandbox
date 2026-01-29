import { Model } from "@nozbe/watermelondb";
import { children, field, text } from "@nozbe/watermelondb/decorators";

export default class Horarios extends Model {
    static table = 'horarios_medicacion';
    static associations = {
        type: 'hasMany', foreignKey: 'recordatorio_id',
        type: 'belongs_to', key: 'receta_id'
    };

    @field('hora_ingesta') horaIngesta;
    @text('dias_semana') diasSemana;

    @children('recordatorios') recordatorio;

}