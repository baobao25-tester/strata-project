<?php

header('Content-Type: text/html; charset=utf-8');

// Simple array of upcoming events
$upcomingEvents = [
    [
        'title' => 'Annual Strata Meeting',
        'date' => 'October 15, 2025',
        'time' => '7:00 PM',
        'location' => 'Community Hall'
    ],
    [
        'title' => 'Building Maintenance Day',
        'date' => 'November 5, 2025',
        'time' => '9:00 AM - 4:00 PM',
        'location' => 'Various locations around the building'
    ],
    [
        'title' => 'Holiday Gathering',
        'date' => 'December 10, 2025',
        'time' => '6:00 PM - 9:00 PM',
        'location' => 'Rooftop Terrace'
    ]
];

?>

<div>
    <h1>Upcoming Events</h1>
    <ul>
        <?php foreach ($upcomingEvents as $event): ?>
            <li>
                <h2><?php echo htmlspecialchars($event['title']); ?></h2>
                <p><strong>Date:</strong> <?php echo htmlspecialchars($event['date']); ?></p>
                <p><strong>Time:</strong> <?php echo htmlspecialchars($event['time']); ?></p>
                <p><strong>Location:</strong> <?php echo htmlspecialchars($event['location']); ?></p>
            </li>
        <?php endforeach; ?>
    </ul>
</div> 