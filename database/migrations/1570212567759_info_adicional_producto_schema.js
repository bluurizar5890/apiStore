'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InfoAdicionalProductoSchema extends Schema {
  up() {
    this.create('info_adicional_productos', (table) => {
      table.increments()
      table.integer('idProducto').unsigned().references('id').inTable('productos')
      table.string('descripcion', 100).notNullable()
      table.string('valor', 100).notNullable()
      table.integer('idEstado').unsigned().references('id').inTable('cat_estados')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down() {
    this.drop('info_adicional_productos')
  }
}

module.exports = InfoAdicionalProductoSchema
