---
layout: minutes
title: Epistles
permalink: /resources/epistles/
---

# FLGBTQC Epistles

This page should reference the complete list of FLGBTQC Epistles. If you know of an Epistle not listed here, please alert the [website manager](mailto:{{layout.website_manager.email}}).

Click on a name below to see that epistle, or click the "View all" button to see all of them together.

View all
{: .btn #view-all}

<div id='epistles'>
  {% for epistle in site.data.epistles %}
    {%- include minute.html title=epistle.title filename=epistle.filename -%}
  {% endfor %}
</div>
