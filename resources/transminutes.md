---
layout: minutes
title: Minutes Welcoming Transgender People
permalink: /resources/transminutes/
---
{%- include people.html -%}

## Collected Minutes Welcoming and Affirming Transgender People

This is the collection of Minutes Supporting and Affirming Transgender People among Quakers. 

The collection is a work in progress. Please help us to expand it by encouraging your meeting to minute support and affirmation for transgender people and sending us a copy of the minute.

If you know of a minute not listed here, please alert the [website manager](mailto:{{website_manager.email}}).

**Click on a name below to see that minute, or click the "View all" button to see all of them.**

View all
{: .btn #view-all}

<div id='trans-minutes'>
  {% for minute in site.data.transminutes %}
    {%- include minute.html title=minute.title filename=minute.filename -%}
  {% endfor %}
</div>