import { Model } from "@nozbe/watermelondb";
import { children, field, text } from "@nozbe/watermelondb/decorators";

export default class Citas extends Model {
    static table = 'citas';
    static associations = {
        
        type: 'belongs_to', key: 'usuario_id',
    };

    @field('fecha_cita') fechaCita;
    @field('hora_cita') horaCita;
    @text('especialidad') especialidad;
    @field('nombre_medico') nombreMedico;
    @text('lugar_cita') lugarCita;
    @text('direcciion_completa') direcciionCompleta;
    @text('motivo_cita') motivoCita;
    @field('is_requiere_preparacion') isRequierePreparacion;
    @text('notas_adicionales') notasAdicionales;

    @children('recordatorios') recordatorios;
}