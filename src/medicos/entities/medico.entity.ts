import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('medicos')
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column({ length: 20 })
  celular: string;

  @Column({ length: 100 })
  especialidad: string;
}