# circle.py
# by Dave Pape, for DMS 423
#
# draws a circle, where the points for the vertex list are computed at run-time

from math import *
from pyglet.gl import *

window = pyglet.window.Window()

def makeCircle(numPoints):
    verts = []
    for i in range(numPoints):
        angle = radians(float(i)/numPoints * 360.0)
        x = 100*cos(angle) + 300
        y = 100*sin(angle) + 200
        verts += [x,y]
    global circle
    circle = pyglet.graphics.vertex_list(numPoints, ('v2f', verts))

makeCircle(200)

@window.event
def on_draw():
    global circle
    glClear(pyglet.gl.GL_COLOR_BUFFER_BIT)
    glColor3f(1,1,0)
    circle.draw(GL_LINE_LOOP)

pyglet.app.run()