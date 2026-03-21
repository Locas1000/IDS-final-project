/**
 * Controller to handle ticket-related logic.
 * Follows SGM API Interface Contract (v1.1)
 */

const getTickets = (req, res) => {
    // These 2 objects strictly match the Ticket Object structure from the contract
    const tickets = [
        {
            id: 1,
            title: "AC Leak in Lab L1",
            description: "Constant water dripping from the main AC unit in the computer lab.",
            status: "Open",
            priority: "High",
            slaDeadline: "2026-03-22T12:00:00Z",
            creatorId: 101,
            assignedTechnicianId: null,
            evidence: [
                {
                    id: 501,
                    url: "https://storage.provider.com/evidence/leak_01.jpg",
                    comment: "Photo of the damaged ceiling tile near the AC.",
                    uploadedAt: "2026-03-20T10:00:00Z"
                }
            ],
            createdAt: "2026-03-20T10:00:00Z",
            updatedAt: "2026-03-20T10:05:00Z"
        },
        {
            id: 2,
            title: "Projector Signal Loss - Room 4",
            description: "The projector powers on but does not recognize the HDMI input from laptops.",
            status: "Assigned",
            priority: "Medium",
            slaDeadline: "2026-03-25T17:00:00Z",
            creatorId: 102,
            assignedTechnicianId: 205,
            evidence: [],
            createdAt: "2026-03-19T08:30:00Z",
            updatedAt: "2026-03-20T09:00:00Z"
        }
    ];

    // Return the array of Ticket Objects with a 200 OK status
    res.status(200).json(tickets);
};

module.exports = {
    getTickets
};