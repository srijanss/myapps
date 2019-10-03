import logging

from django.shortcuts import render

logger = logging.getLogger(__name__)

def index(request):
    try:
        context = {}
        return render(request, "index.html", context)
    except Exception as error:
        logger.error(repr(error))
        return render(request, "index.html", {})
