import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Score } from '../interfaces/score.interface';

export const ScoreSchema: mongoose.Schema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    indexes: true,
  },
  score: {
    type: Number,
    required: true,
    min: 1,
  },
  reason: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

export interface IScoreModel extends Score, Document {}
