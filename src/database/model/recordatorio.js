import { Model } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export default class Recordatorios extends Model {
    static table = 'recordatorios';
    static associations = {
        type: 'belongs_to', key: 'cita_id',
        type: 'belongs_to', key: 'horario_id',
        type: 'hasMany', foreignKey: 'recordatorio_id'
    };

    @text('tipo_tarea') tipoTarea;
    @text('entidad_externa') entidadExterna;
    @field('fecha_hora_alerta') fechaHoraAlerta;
    @field('estado_toma') estadoToma;
    @field('fecha_registro_toma') fechaRegistroToma;
}