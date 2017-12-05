<template lang="pug">
  div
    button(@click.prevent="openPopup('addPopup')").
      Добавить
    div(v-show="addPopup.open" @click.self="closePopup('addPopup')").modal
      div.modal__content
        p.
          Добавить
        a(href="" @click.prevent="closePopup('addPopup')").modal__close
        label
          span.
            Название
          input(v-model="addPopup.row.name")
        label
          span.
            Дата добавления
          select(v-model="addPopup.row.date")
            option(v-for="key, value in seasons", :value="value").
              {{key}}
        label
          span.
            Описание
          textarea(rows="5" v-model.trim="addPopup.row.description")
        button(@click.prevent="addRow").
          Добавить
        button(@click.prevent="closePopup('addPopup')").
          Закрыть
    div(v-show="changePopup.open" @click.self="closePopup('changePopup')").modal
      div.modal__content
        p.
          Редактировать
        a(href="" @click.prevent="closePopup('changePopup')").modal__close
        label
          span.
            Название
          input(v-model="changePopup.row.name")
        label
          span.
            Дата добавления
          select(v-model="changePopup.row.date")
            option(v-for="key, value in seasons", :value="value").
              {{key}}
        label
          span.
            Описание
          textarea(rows="5", v-model="changePopup.row.description")
        button(@click.prevent="changeRow").
          Сохранить
        button(@click.prevent="closePopup('changePopup')").
          Закрыть
    table(v-show="appleTable.length > 0")
      tr
        td.
          Название
        td.
          Дата добавления
        td.
          Описание
        td
      tr(v-for="item, index in appleTable")
        td.
          {{ item.name }}
        td.
          {{ seasons[item.date] }}
        td.
          {{ item.description }}
        td
            button(@click.prevent="openPopup('changePopup', index)").
              Редактировать
            button(@click.prevent="removeRow(index)").
              Удалить
    p(v-show="appleTable.length === 0").
      Нет записей.
</template>

<script>
  import bus from '../bus'

  const defaultRow = {
    name: '',
    date: 'winter',
    description: ''
  }

  export default {
    name: 'grades-table',
    props: ['appleTable'],
    data () {
      return {
        seasons: {winter: 'Зима', spring: 'Весна', summer: 'Лето', autumn: 'Осень'},
        activePopup: '',
        addPopup: {
          open: false,
          row: defaultRow
        },
        changePopup: {
          open: false,
          row: defaultRow,
          rowIndex: 0
        }
      }
    },
    methods: {
      openPopup (name, index) {
        this[name].open = true
        this.activePopup = name

        if (typeof index !== 'undefined') {
          this.changePopup.rowIndex = index
          this.changePopup.row = this.createNewRow(this.appleTable[index])
        }
      },
      closePopup (name) {
        this[name].open = false
        this.clearRow()
      },
      createNewRow (obj) {
        return Object.assign({}, obj)
      },
      addRow () {
        bus.$emit('addrow', this.createNewRow(this.addPopup.row))
        this.closePopup(this.activePopup)
      },
      changeRow (index) {
        bus.$emit('changerow', {changedRow: this.changePopup.row, index: this.changePopup.rowIndex})
        this.closePopup(this.activePopup)
      },
      removeRow (index) {
        bus.$emit('removerow', index)
      },
      clearRow () {
        const obj = this.addPopup.row

        for (const key in obj) {
          obj[key] = key === 'date' ? 'winter' : ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .modal {
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    
    &__content {
      background-color: white;
      margin: 50px auto 50px;
      padding: 20px 30px;
      position: relative;
      max-width: 600px;
    }

    &__close {
      $size: 20px;
      $line-width: 2px;
      position: absolute;
      top: 20px;
      right: 20px;
      height: 20px;
      width: 20px;

      &:before,
      &:after {
        content: "";
        background-color: black;
        position: absolute;
        top: 0;
        left: calc(50% - #{$line-width} / 2);
        height: 100%;
        width: $line-width;
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
  }

  table {
    border-collapse: collapse;
    border: 1px solid black;
    width: 100%;

    td {
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      padding: 0;

      &:last-child {
        border-right: none;
      }
    }

    tr {

      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>


