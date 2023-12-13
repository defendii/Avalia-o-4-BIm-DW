from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/postgres'
db = SQLAlchemy(app)

class Passagem(db.Model):
    idpassagem = db.Column(db.Integer, primary_key=True)
    data_ida = db.Column(db.TIMESTAMP, nullable=False)
    data_volta = db.Column(db.TIMESTAMP)
    idorigem = db.Column(db.Integer, db.ForeignKey('origem.idorigem'), nullable=False)
    origem = db.relationship('Origem', backref=db.backref('passagens_origem', lazy=True))
    iddestino = db.Column(db.Integer, db.ForeignKey('destinos.iddestino'), nullable=False)
    destino = db.relationship('Destinos', backref=db.backref('passagens_destino', lazy=True))
    duracao = db.Column(db.Time, nullable=False)
    companhia_aerea = db.Column(db.String(10), nullable=False)
    qtde_pessoas = db.Column(db.Integer, nullable=False)
    idclassevoo = db.Column(db.Integer, db.ForeignKey('classevoo.idclassevoo'), nullable=False)
    classevoo = db.relationship('ClasseVoo', backref=db.backref('passagem', lazy=True))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/passagens')
def listar_passagens():
    passagens = Passagem.query.all()
    return render_template('passagens.html', passagens=passagens)

if __name__ == '__main__':
    app.run(debug=True)