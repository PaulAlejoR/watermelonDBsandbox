import { Model } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export default class CatalogoMedicinas extends Model {
    static table = 'catalogo_medicinas';
    static associations = {
        type: 'belongs_to', key: 'receta_id'
    };

    @field('nombre_comercial') nombreComercial;
    @text('principio_activo') principioActivo;
    @text('presentacion') presentacion;
    @text('unidad_medida') unidadMedida;
    @text('concentracion') concentracion;
    @text('instrucciones_generales') instruccionesGenerales;

    
}