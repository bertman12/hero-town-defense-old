function InitGlobals()
end

function InitCustomPlayerSlots()
SetPlayerStartLocation(Player(0), 0)
SetPlayerColor(Player(0), ConvertPlayerColor(0))
SetPlayerRacePreference(Player(0), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(0), true)
SetPlayerController(Player(0), MAP_CONTROL_USER)
end

function InitCustomTeams()
SetPlayerTeam(Player(0), 0)
end

function main()
SetCameraBounds(-9472.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -9728.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 9472.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 9216.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -9472.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 9216.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 9472.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -9728.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
NewSoundEnvironment("Default")
SetAmbientDaySound("LordaeronSummerDay")
SetAmbientNightSound("LordaeronSummerNight")
SetMapMusic("Music", true, 0)
InitBlizzard()
InitGlobals()
end

function config()
SetMapName("TRIGSTR_003")
SetMapDescription("TRIGSTR_005")
SetPlayers(1)
SetTeams(1)
SetGamePlacement(MAP_PLACEMENT_USE_MAP_SETTINGS)
DefineStartLocation(0, 0.0, -64.0)
InitCustomPlayerSlots()
SetPlayerSlotAvailable(Player(0), MAP_CONTROL_USER)
InitGenericPlayerSlots()
end

