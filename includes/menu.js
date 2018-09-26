Vue.component('options', {
    data: function (){
        return {
            drawer: false,
            menu: [
                { title: "Pessoa física", icon: "", options: [["Consulta", "assignment"], ["Cadastrar", "person_add"]] },
                { title: "Docente", icon: "", options: [["Consulta", "assignment"], ["Cadastrar", "person_add"]] },
                { title: "Pessoa jurídica", icon: "", options: [["Consulta", "assignment"], ["Cadastrar", "person_add"]] }
            ]
        };
    },
    props: ['menutitle', 'app'],
    template: `
    <div id="toolbox">
        <v-toolbar>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{ menutitle }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat>Sair</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer app
            v-model="drawer"
            temporary
        >
            <v-list>
                <v-list-group
                    no-action
                    v-for="(item, i) in menu"
                    :key="'item'+i"
                >
                    <v-list-tile slot="activator">
                        <v-list-tile-action>
                            <v-icon>person</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile
                        v-for="(subItem, j) in item.options"
                        @click=""
                        :key="'subItem'+j"
                    >
                        <v-list-tile-title v-text="subItem[0]"></v-list-tile-title>
                        <v-list-tile-action>
                            <v-icon v-text="subItem[1]"></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </div>
`
})