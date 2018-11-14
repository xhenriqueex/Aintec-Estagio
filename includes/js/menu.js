// nesse arquivo fica a declaração das tags do cabeçalho das páginas

Vue.component('header-login', {
    props: ['menutitle'],
    template: `
    <div id="toolbox">
        <v-toolbar>
            <v-toolbar-title>{{ menutitle }}</v-toolbar-title>
        </v-toolbar>
    </div>
`
})

Vue.component('header-unlogged', {
    props: ['menutitle'],
    template: `
    <div id="toolbox">
        <v-toolbar>
            <v-toolbar-title>{{ menutitle }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat onclick='window.location.href = "./login/login.html";'>Entrar</v-btn>
                <v-btn flat onclick='window.location.href = "./cad_usuario/index_cad.html";'>Cadastrar-se</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
`
})

Vue.component('header-logged', {
    data: function (){
        return {
            drawer: false,
            menu: [
                {
                    title:"Pessoa física",
                    icon: "",
                    options: [
                        ["Consulta", "assignment"],
                        ["Cadastrar", "person_add", "/aintec/cad_pf/cad_pf.php"]
                    ]
                },
                {
                    title: "Docente",
                    icon: "",
                    options: [
                        ["Consulta", "assignment"],
                        ["Cadastrar", "person_add"]
                    ]
                },
                {
                    title: "Pessoa jurídica",
                    icon: "",
                    options: [
                        ["Consulta", "assignment"],
                        ["Cadastrar", "person_add", "/aintec/cad_pj/cad_pj.php"]
                    ]
                }
			],
        };
		},

		methods: {
			exit: function() {
				let params = new URLSearchParams();
				params.append('switch', 'unlog');
				axios.post("/aintec/includes/php/functions.php", params)
				.then(() => {
					window.location.href = "/aintec/index.php";
				})
				.catch(error => {
					console.log(error);
				});
            },
            
            redirect: function(path) {
                if(path != undefined) {
                    window.location.href = path;
                }
                else {
                    alert("não implementado (cheque menu.js)!");
                }
                
            }
		},

		props: ['menutitle'],

    template: `
    <div id="toolbox">
        <v-toolbar>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{ menutitle }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat> <v-icon>person</v-icon> </v-btn>
                <v-btn flat @click="exit()">Sair</v-btn>
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
                        @click="redirect(subItem[2])"
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
