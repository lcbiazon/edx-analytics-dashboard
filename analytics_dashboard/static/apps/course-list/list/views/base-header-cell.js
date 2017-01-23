define(function(require) {
    'use strict';

    var BaseHeaderCell = require('components/generic-list/list/views/base-header-cell'),

        CourseListBaseHeaderCell;

    CourseListBaseHeaderCell = BaseHeaderCell.extend({
        container: '.course-list-table',
        tooltips: {
            catalog_course_title: gettext('The title and course id of the course.'),
            start_date: gettext('The date that the course starts on.'),
            end_date: gettext('The date that the course ends on.'),
            cumulative_count: gettext('Learners who ever enrolled in the course.'),
            count: gettext('Learners currently enrolled in the course.'),
            count_change_7_days: gettext('Net difference in current enrollment in the last week.'),
            verified_enrollment: gettext('Number of currently enrolled learners pursuing a verified certificate of achievement.')
        }
    });

    return CourseListBaseHeaderCell;
});
