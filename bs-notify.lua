-- Function to send notification
local function SendNotification(message, type)
    SendNUIMessage({
        action = 'bs-notify',
        type = type or 'info',
        message = message
    })
end
--
-- Function to be exported and used by other resources
function BSNotify(message, type)
    SendNotification(message, type)
end

-- Register the event handler
RegisterNetEvent('BS-Notify')
AddEventHandler('BS-Notify', function(data)
    SendNotification(data.message, data.type)
end)

-- Export the function so it can be used by other resources
exports('BSNotify', BSNotify)