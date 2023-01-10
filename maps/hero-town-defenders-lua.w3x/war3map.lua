gg_snd_PursuitTheme = ""
function InitGlobals()
end

function InitSounds()
gg_snd_PursuitTheme = "PursuitTheme"
end

function CreateUnitsForPlayer0()
local p = Player(0)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("umtw"), -193.2, -347.1, 280.028, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 11.6, -361.4, 59.844, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 354.5, -359.9, 52.242, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("umtw"), 609.7, -256.1, 111.734, FourCC("umtw"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), -232.4, 132.1, 128.786, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 286.4, 239.5, 281.962, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("uabo"), 505.7, 166.8, 13.294, FourCC("uabo"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), -99.1, -151.4, 347.816, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 136.9, -116.7, 196.145, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 351.7, -85.0, 199.749, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("ufro"), 534.5, -54.8, 215.163, FourCC("ufro"))
u = BlzCreateUnitWithSkin(p, FourCC("U001"), -15.7, 392.8, 284.430, FourCC("U001"))
SetHeroLevel(u, 30, false)
SelectHeroSkill(u, FourCC("AUdc"))
SelectHeroSkill(u, FourCC("AUdc"))
SelectHeroSkill(u, FourCC("AUdc"))
SelectHeroSkill(u, FourCC("ANrf"))
SelectHeroSkill(u, FourCC("ANrf"))
SelectHeroSkill(u, FourCC("ANrf"))
SelectHeroSkill(u, FourCC("AHbn"))
SelectHeroSkill(u, FourCC("AHbn"))
SelectHeroSkill(u, FourCC("AHbn"))
SelectHeroSkill(u, FourCC("ANtm"))
u = BlzCreateUnitWithSkin(p, FourCC("Hblm"), 7146.3, 1551.4, 118.711, FourCC("Hblm"))
end

function CreateNeutralPassiveBuildings()
local p = Player(PLAYER_NEUTRAL_PASSIVE)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("n001"), -16000.0, -15680.0, 270.000, FourCC("n001"))
SetUnitColor(u, ConvertPlayerColor(0))
u = BlzCreateUnitWithSkin(p, FourCC("n003"), 16192.0, -16448.0, 270.000, FourCC("n003"))
SetUnitColor(u, ConvertPlayerColor(0))
end

function CreatePlayerBuildings()
end

function CreatePlayerUnits()
CreateUnitsForPlayer0()
end

function CreateAllUnits()
CreateNeutralPassiveBuildings()
CreatePlayerBuildings()
CreatePlayerUnits()
end

function InitCustomPlayerSlots()
SetPlayerStartLocation(Player(0), 0)
ForcePlayerStartLocation(Player(0), 0)
SetPlayerColor(Player(0), ConvertPlayerColor(0))
SetPlayerRacePreference(Player(0), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(0), false)
SetPlayerController(Player(0), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(1), 1)
ForcePlayerStartLocation(Player(1), 1)
SetPlayerColor(Player(1), ConvertPlayerColor(1))
SetPlayerRacePreference(Player(1), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(1), false)
SetPlayerController(Player(1), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(2), 2)
ForcePlayerStartLocation(Player(2), 2)
SetPlayerColor(Player(2), ConvertPlayerColor(2))
SetPlayerRacePreference(Player(2), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(2), false)
SetPlayerController(Player(2), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(3), 3)
ForcePlayerStartLocation(Player(3), 3)
SetPlayerColor(Player(3), ConvertPlayerColor(3))
SetPlayerRacePreference(Player(3), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(3), false)
SetPlayerController(Player(3), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(4), 4)
ForcePlayerStartLocation(Player(4), 4)
SetPlayerColor(Player(4), ConvertPlayerColor(4))
SetPlayerRacePreference(Player(4), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(4), false)
SetPlayerController(Player(4), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(5), 5)
ForcePlayerStartLocation(Player(5), 5)
SetPlayerColor(Player(5), ConvertPlayerColor(5))
SetPlayerRacePreference(Player(5), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(5), false)
SetPlayerController(Player(5), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(6), 6)
ForcePlayerStartLocation(Player(6), 6)
SetPlayerColor(Player(6), ConvertPlayerColor(6))
SetPlayerRacePreference(Player(6), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(6), false)
SetPlayerController(Player(6), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(7), 7)
ForcePlayerStartLocation(Player(7), 7)
SetPlayerColor(Player(7), ConvertPlayerColor(7))
SetPlayerRacePreference(Player(7), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(7), false)
SetPlayerController(Player(7), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(8), 8)
ForcePlayerStartLocation(Player(8), 8)
SetPlayerColor(Player(8), ConvertPlayerColor(8))
SetPlayerRacePreference(Player(8), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(8), false)
SetPlayerController(Player(8), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(9), 9)
ForcePlayerStartLocation(Player(9), 9)
SetPlayerColor(Player(9), ConvertPlayerColor(9))
SetPlayerRacePreference(Player(9), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(9), false)
SetPlayerController(Player(9), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(10), 10)
ForcePlayerStartLocation(Player(10), 10)
SetPlayerColor(Player(10), ConvertPlayerColor(10))
SetPlayerRacePreference(Player(10), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(10), false)
SetPlayerController(Player(10), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(11), 11)
ForcePlayerStartLocation(Player(11), 11)
SetPlayerColor(Player(11), ConvertPlayerColor(11))
SetPlayerRacePreference(Player(11), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(11), false)
SetPlayerController(Player(11), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(16), 12)
SetPlayerColor(Player(16), ConvertPlayerColor(16))
SetPlayerRacePreference(Player(16), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(16), false)
SetPlayerController(Player(16), MAP_CONTROL_COMPUTER)
SetPlayerStartLocation(Player(20), 13)
SetPlayerColor(Player(20), ConvertPlayerColor(20))
SetPlayerRacePreference(Player(20), RACE_PREF_UNDEAD)
SetPlayerRaceSelectable(Player(20), false)
SetPlayerController(Player(20), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(21), 14)
SetPlayerColor(Player(21), ConvertPlayerColor(21))
SetPlayerRacePreference(Player(21), RACE_PREF_ORC)
SetPlayerRaceSelectable(Player(21), false)
SetPlayerController(Player(21), MAP_CONTROL_COMPUTER)
end

function InitCustomTeams()
SetPlayerTeam(Player(0), 0)
SetPlayerState(Player(0), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(1), 0)
SetPlayerState(Player(1), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(2), 0)
SetPlayerState(Player(2), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(3), 0)
SetPlayerState(Player(3), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(4), 0)
SetPlayerState(Player(4), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(5), 0)
SetPlayerState(Player(5), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerAllianceStateAllyBJ(Player(0), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(0), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(0), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(0), Player(4), true)
SetPlayerAllianceStateAllyBJ(Player(0), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(4), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(4), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(3), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(3), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(3), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(3), Player(4), true)
SetPlayerAllianceStateAllyBJ(Player(3), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(4), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(4), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(4), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(4), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(4), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(4), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(4), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(4), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(4), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(4), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(4), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(4), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(4), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(4), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(4), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(4), true)
SetPlayerTeam(Player(6), 1)
SetPlayerState(Player(6), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(7), 1)
SetPlayerState(Player(7), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(8), 1)
SetPlayerState(Player(8), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(10), 1)
SetPlayerState(Player(10), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(11), 1)
SetPlayerState(Player(11), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(16), 1)
SetPlayerState(Player(16), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(20), 1)
SetPlayerState(Player(20), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerAllianceStateAllyBJ(Player(6), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(16), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(20), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(16), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(20), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(16), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(20), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(16), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(20), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(16), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(20), true)
SetPlayerAllianceStateAllyBJ(Player(16), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(16), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(16), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(16), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(16), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(16), Player(20), true)
SetPlayerAllianceStateAllyBJ(Player(20), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(20), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(20), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(20), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(20), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(20), Player(16), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(16), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(20), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(16), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(20), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(16), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(20), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(16), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(20), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(16), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(20), true)
SetPlayerAllianceStateVisionBJ(Player(16), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(16), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(16), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(16), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(16), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(16), Player(20), true)
SetPlayerAllianceStateVisionBJ(Player(20), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(20), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(20), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(20), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(20), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(20), Player(16), true)
SetPlayerTeam(Player(9), 2)
SetPlayerState(Player(9), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(21), 2)
SetPlayerState(Player(21), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerAllianceStateAllyBJ(Player(9), Player(21), true)
SetPlayerAllianceStateAllyBJ(Player(21), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(21), true)
SetPlayerAllianceStateVisionBJ(Player(21), Player(9), true)
end

function InitAllyPriorities()
SetStartLocPrioCount(0, 2)
SetStartLocPrio(0, 0, 6, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(0, 1, 8, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(1, 4)
SetStartLocPrio(1, 0, 2, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(1, 1, 3, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(1, 2, 4, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(1, 3, 5, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(2, 4)
SetStartLocPrio(2, 0, 1, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(2, 1, 3, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(2, 2, 4, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(2, 3, 5, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(3, 4)
SetStartLocPrio(3, 0, 1, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(3, 1, 2, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(3, 2, 4, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(3, 3, 5, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(4, 4)
SetStartLocPrio(4, 0, 1, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(4, 1, 2, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(4, 2, 3, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(4, 3, 5, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(5, 4)
SetStartLocPrio(5, 0, 1, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(5, 1, 2, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(5, 2, 3, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(5, 3, 4, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(6, 1)
SetStartLocPrio(6, 0, 0, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(7, 10)
SetStartLocPrio(7, 0, 0, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(7, 1, 1, MAP_LOC_PRIO_LOW)
SetStartLocPrio(7, 2, 2, MAP_LOC_PRIO_LOW)
SetStartLocPrio(7, 3, 3, MAP_LOC_PRIO_LOW)
SetStartLocPrio(7, 4, 4, MAP_LOC_PRIO_LOW)
SetStartLocPrio(7, 5, 5, MAP_LOC_PRIO_LOW)
SetStartLocPrio(7, 6, 6, MAP_LOC_PRIO_LOW)
SetStartLocPrio(7, 7, 8, MAP_LOC_PRIO_LOW)
SetStartLocPrio(7, 8, 10, MAP_LOC_PRIO_LOW)
SetStartLocPrio(7, 9, 13, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(8, 4)
SetStartLocPrio(8, 0, 0, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(8, 1, 6, MAP_LOC_PRIO_LOW)
SetStartLocPrio(8, 2, 11, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(8, 3, 13, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(9, 12)
SetStartLocPrio(9, 0, 1, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 1, 2, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 2, 3, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 3, 4, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 4, 5, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 5, 6, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 6, 7, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 7, 8, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 8, 10, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 9, 11, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 10, 12, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 11, 13, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(10, 1)
SetStartLocPrio(10, 0, 13, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(11, 3)
SetStartLocPrio(11, 0, 8, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(11, 1, 10, MAP_LOC_PRIO_LOW)
SetStartLocPrio(11, 2, 13, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(12, 12)
SetStartLocPrio(12, 0, 1, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(12, 1, 2, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(12, 2, 3, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(12, 3, 4, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(12, 4, 5, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(12, 5, 6, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(12, 6, 7, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(12, 7, 8, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(12, 8, 9, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(12, 9, 10, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(12, 10, 11, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(12, 11, 13, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(13, 1)
SetStartLocPrio(13, 0, 10, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(14, 3)
SetStartLocPrio(14, 0, 1, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(14, 1, 5, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(14, 2, 6, MAP_LOC_PRIO_HIGH)
SetEnemyStartLocPrioCount(14, 6)
SetEnemyStartLocPrio(14, 0, 4, MAP_LOC_PRIO_HIGH)
SetEnemyStartLocPrio(14, 1, 5, MAP_LOC_PRIO_HIGH)
SetEnemyStartLocPrio(14, 2, 6, MAP_LOC_PRIO_HIGH)
SetEnemyStartLocPrio(14, 3, 10, MAP_LOC_PRIO_HIGH)
SetEnemyStartLocPrio(14, 4, 13, MAP_LOC_PRIO_HIGH)
end

function main()
SetCameraBounds(-17664.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -17920.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 17664.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 17408.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -17664.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 17408.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 17664.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -17920.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
NewSoundEnvironment("Default")
SetAmbientDaySound("LordaeronSummerDay")
SetAmbientNightSound("LordaeronSummerNight")
SetMapMusic("Music", true, 0)
InitSounds()
CreateAllUnits()
InitBlizzard()
InitGlobals()
end

function config()
SetMapName("TRIGSTR_003")
SetMapDescription("TRIGSTR_005")
SetPlayers(15)
SetTeams(15)
SetGamePlacement(MAP_PLACEMENT_TEAMS_TOGETHER)
DefineStartLocation(0, 0.0, -64.0)
DefineStartLocation(1, -15616.0, -16064.0)
DefineStartLocation(2, -15616.0, -16064.0)
DefineStartLocation(3, -15616.0, -16064.0)
DefineStartLocation(4, -15616.0, -16064.0)
DefineStartLocation(5, -15616.0, -16064.0)
DefineStartLocation(6, 3456.0, 6848.0)
DefineStartLocation(7, 9984.0, -16256.0)
DefineStartLocation(8, -8064.0, 3456.0)
DefineStartLocation(9, 13952.0, -5888.0)
DefineStartLocation(10, -16128.0, -7104.0)
DefineStartLocation(11, -16448.0, 3456.0)
DefineStartLocation(12, 2432.0, -4800.0)
DefineStartLocation(13, -12672.0, -5248.0)
DefineStartLocation(14, -3392.0, -3520.0)
InitCustomPlayerSlots()
InitCustomTeams()
InitAllyPriorities()
end

