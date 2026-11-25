export const FACTIONS=[
{id:'null',name:'NULL',color:0x852cff,accent:0x1b1028,difficulty:'HARD',style:'aggressive',description:'A mysterious force that overwhelms targets with relentless pressure.',members:['Null_Zero','VoidWalker','N0_SIGNAL','NullKnight','DarkMatter','NullEcho','VoidProxy','Blackout'],intro:'THE SIGNAL IS LIVE.',relationship:'hostile'},
{id:'mafia',name:'THE INVISIBLE MAFIA',color:0x9e315e,accent:0x211019,difficulty:'VERY HARD',style:'assassin',description:'A coordinated underground crew built around ambushes and isolation.',members:['TheSilhouette','Mr_Unknown','GhostLedger','Redacted','NightBroker','QuietDeal','NoWitness','Backroom'],intro:'YOU NEVER SAW THEM COMING.',relationship:'hostile'},
{id:'directors',name:'THE DIRECTORS',color:0xd8a73a,accent:0x30200c,difficulty:'VERY HARD',style:'tactical',description:'Disciplined enforcers who hold ground and support their formation.',members:['Director_One','TheProducer','ExecutiveX','StageManager','FinalCut','ScriptKeeper','TheEditor','RedTape'],intro:'THE SCENE IS UNDER CONTROL.',relationship:'hostile'},
{id:'royal',name:'THE ROYAL GUARD',color:0x45a6db,accent:0x10202b,difficulty:'MEDIUM–HARD',style:'defensive',description:'A kingdom force with heavy armor, shield walls, and ranged support.',members:['RoyalSentinel','CrownShield','GoldStandard','Knightfall','KingdomAce','BlueBanner','HighMarshal','IronCrown'],intro:'HOLD THE LINE.',relationship:'allied'},
{id:'rebels',name:'THE REBELS',color:0x56bd76,accent:0x102318,difficulty:'MEDIUM',style:'aggressive',description:'Independent fighters with unpredictable movement and fast attacks.',members:['RogueOne','AshRunner','FreeAgent','Revolt','WildCard','DustSignal','Runaway','Renegade'],intro:'NO ONE OWNS THIS ARENA.',relationship:'independent'},
{id:'mercs',name:'THE MERCENARIES',color:0xc58b53,accent:0x261a10,difficulty:'HARD',style:'ranged',description:'Veteran contract fighters who adapt between ranged and melee pressure.',members:['IronContract','Deadeye','CoinFlip','WarForHire','LastPayment','ColdInvoice','PaidInFull','Crosshair'],intro:'CONTRACT ACCEPTED.',relationship:'independent'}
];
export const LOADOUTS=[
{id:'parrot',name:'PARROT',armor:'Protection IV Netherite',weapons:['Netherite Sword','Power V Bow','Multishot Crossbow'],items:['sword','bow','crossbow','pearl','golden_apple','totem','firework','cobweb','wind_charge'],damage:20,color:0x29b9a5,desc:'Balanced sword and ranged fighter.',inventory:['⚔️','🏹','🏹','🟣','🍎','✚','🎆','🕸️','🌪️']},
{id:'wembu',name:'WEMMBU',armor:'Protection IV Netherite + Elytra',weapons:['Density V Mace','Wind Burst Mace','Netherite Sword'],items:['mace','wind_mace','sword','crystal','anchor','wind_charge','totem','enchanted_apple','pearl'],damage:32,color:0x7f8cff,desc:'Heavy impact and aerial combat specialist.',inventory:['🔨','🌪️','⚔️','💎','⚓','🌪️','✚','🍏','🟣']},
{id:'spoke',name:'SPOKE',armor:'Protection IV Netherite',weapons:['Netherite Sword','Breaching IV Mace'],items:['sword','mace','pearl','potion','invisibility','cobweb','lava','water','golden_apple'],damage:23,color:0xd1a35e,desc:'Utility duelist with traps and flexible equipment.',inventory:['⚔️','🔨','🟣','🧪','👻','🕸️','🪣','💧','🍎']},
{id:'flamefrags',name:'FLAMEFRAGS',armor:'Protection IV Netherite',weapons:['Netherite Sword','Netherite Axe','Power V Bow'],items:['sword','axe','bow','totem','golden_apple','pearl','strength','speed','cobweb'],damage:25,color:0xff744a,desc:'Hard-hitting axe fighter with ranged follow-up.',inventory:['⚔️','🪓','🏹','✚','🍎','🟣','🔥','💨','🕸️']}
];
export const ARENAS=[
{name:'Medieval Kingdom',ground:0x66764c,wall:0x8d8b79,sky:0x8298b8,style:'castle'},
{name:'Abandoned City',ground:0x555b64,wall:0x8b9299,sky:0x87909d,style:'city'},
{name:'Mafia Hideout',ground:0x302d3b,wall:0x735166,sky:0x4d405e,style:'urban'},
{name:'Director Headquarters',ground:0x454a54,wall:0xa58b54,sky:0x8c8a93,style:'modern'},
{name:'Nether Arena',ground:0x4c2630,wall:0x9d4c38,sky:0x4b1d2a,style:'nether'},
{name:'Mountain Battlefield',ground:0x626b73,wall:0x929ca8,sky:0x9db2c7,style:'mountain'},
{name:'Forest Arena',ground:0x38533b,wall:0x617a4b,sky:0x88a78c,style:'forest'},
{name:'Floating Islands',ground:0x65718e,wall:0xa3b2cb,sky:0x839fc7,style:'islands'}
];
export const MODES=['Faction War','Free For All','Survival Arena','Boss Battles','Practice'];
export const RELATIONS={null:{mafia:'hostile',directors:'hostile',royal:'hostile',rebels:'hostile',mercs:'hostile'},mafia:{directors:'hostile',royal:'hostile',rebels:'hostile',mercs:'hostile'},directors:{royal:'hostile',rebels:'hostile',mercs:'hostile'},royal:{rebels:'hostile',mercs:'hostile'},rebels:{mercs:'hostile'}};
export const relation=(a,b)=>a===b?'ally':RELATIONS[a]?.[b]||RELATIONS[b]?.[a]||'hostile';