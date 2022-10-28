---
layout: default
title: Epistles
permalink: /resources/epistles/
---
{%- include people.html -%}

# FLGBTQC Epistles

This page should reference the complete list of FLGBTQC Epistles. If you know of an Epistle not listed here, please alert the [website manager](mailto:{{website_manager.email}}).

Click on a name below to see that epistle, or click the "View all" button to see all of them together.

<button class='btn' id='view-all'>View all</button>

<div id='epistles'>
  {% for epistle in site.data.epistles %}
    {%- include minute.html title=epistle.title filename=epistle.filename -%}
  {% endfor %}
</div>
